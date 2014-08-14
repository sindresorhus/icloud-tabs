'use strict';
var fs = require('fs');
var bplistParser = require('bplist-parser');
var untildify = require('untildify');

var file = untildify('~/Library/SyncedPreferences/com.apple.Safari.plist');

function parse(buf) {
	var items = bplistParser.parseBuffer(buf)[0].values;

	return Object.keys(items).map(function (key) {
		var val = items[key].value;

		return {
			deviceId: key,
			deviceName: val.DeviceName,
			modified: new Date(val.LastModified),
			tabs: (val.Tabs || []).map(function (el) {
				return {
					title: el.Title,
					url: el.URL
				};
			})
		};
	});
}

module.exports = function (cb) {
	fs.readFile(file, function (err, buf) {
		if (err && err.code === 'ENOENT') {
			return cb(null, []);
		}

		if (err) {
			return cb(err);
		}

		try {
			cb(null, parse(buf));
		} catch (err) {
			cb(err);
		}
	});
};

module.exports.sync = function () {
	try {
		return parse(fs.readFileSync(file));
	} catch (err) {
		if (err.code === 'ENOENT') {
			return [];
		}

		throw err;
	}
};
