'use strict';
const fs = require('fs');
const bplistParser = require('bplist-parser');
const untildify = require('untildify');
const pify = require('pify');

const fsP = pify(fs);
const file = untildify('~/Library/SyncedPreferences/com.apple.Safari.plist');

const parse = buf => {
	const items = bplistParser.parseBuffer(buf)[0].values;

	return Object.keys(items).map(key => {
		const val = items[key].value;

		return {
			deviceId: key,
			deviceName: val.DeviceName,
			modified: new Date(val.LastModified),
			tabs: (val.Tabs || []).map(x => {
				return {
					title: x.Title,
					url: x.URL
				};
			})
		};
	});
};

module.exports = () => fsP.readFile(file)
	.then(parse)
	.catch(err => {
		if (err.code === 'ENOENT') {
			return [];
		}

		throw err;
	});

module.exports.sync = () => {
	try {
		return parse(fs.readFileSync(file));
	} catch (err) {
		if (err.code === 'ENOENT') {
			return [];
		}

		throw err;
	}
};
