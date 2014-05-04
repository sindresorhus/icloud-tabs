# icloud-tabs [![Build Status](https://travis-ci.org/sindresorhus/icloud-tabs.svg?branch=master)](https://travis-ci.org/sindresorhus/icloud-tabs)

> Get the [iCloud tabs](https://www.google.com/search?q=icloud+tabs) for all synced devices *(OS X)*


## Install

```sh
$ npm install --save icloud-tabs
```


## Usage

```js
var icloudTabs = require('icloud-tabs');

console.log(icloudTabs.sync());
/*
[
	{
		deviceId: '7A5E9C4F-BFFA-4B40-9B4F-C61CA4CWAD3F',
		deviceName: 'Sindre Sorhus’s iPhone',
		modified: Sun May 04 3014 18:19:48 GMT+0200 (CEST),
		tabs: [
			{
				title: 'TodoMVC',
				url: 'http://todomvc.com'
			},
			{
				title: 'Sindre Sorhus',
				url: 'http://sindresorhus.com'
			}
		]
	}
]
*/
```


## API

Tabs are fetched from `~/Library/SyncedPreferences/com.apple.Safari.plist`, so it works fine offline.

### icloudTabs(callback)

#### callback(err, devices)

`devices` is an array of device objects as shown in the usage example.

### icloudTabs.sync()

Synchronous version. Returns `devices`.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
