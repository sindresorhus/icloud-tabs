# icloud-tabs

> Get the [iCloud tabs](https://www.google.com/search?q=icloud+tabs) for all synced devices *(macOS)*

## Install

```
$ npm install icloud-tabs
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
				url: 'https://todomvc.com'
			},
			{
				title: 'Sindre Sorhus',
				url: 'https://sindresorhus.com'
			}
		]
	}
]
*/
```

## API

Tabs are fetched from `~/Library/SyncedPreferences/com.apple.Safari.plist`, so it works fine offline.

### icloudTabs()

Returns a promise for an array of `devices`.

### icloudTabs.sync()

Returns an array of `devices`.
