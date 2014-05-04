'use strict';
var assert = require('assert');
var icloudTabs = require('./index');

it('should return iCloud tabs', function (cb) {
	icloudTabs(function (err, devices) {
		console.log('Devices:', devices);
		assert(!err, err);
		assert(Array.isArray(devices));
		cb();
	});
});

it('should return iCloud tabs sync', function () {
	assert(Array.isArray(icloudTabs.sync()));
});
