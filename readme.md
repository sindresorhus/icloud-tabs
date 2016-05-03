# icloud-tabs [![Build Status](https://travis-ci.org/sindresorhus/icloud-tabs.svg?branch=master)](https://travis-ci.org/sindresorhus/icloud-tabs)

> Get the [iCloud tabs](https://www.google.com/search?q=icloud+tabs) for all synced devices *(OS X)*


## Install

```
$ npm install --save icloud-tabs
```


## Usage

```js
const icloudTabs = require('icloud-tabs');

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

### icloudTabs()

Returns a Promise of `devices`.

### icloudTabs.sync()

Returns an array of `devices`.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
