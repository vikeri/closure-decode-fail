# Decode test for Google Closure

The method `goog.crypt.base64.decodeString` behaves differently on JavaScriptCore compared to SpiderMonkey/V8.

If given `null` it will successfully complete on V8/SpiderMonkey but throw an error on JavaScriptCore.

## Setup
```
yarn
```

## Run test

Open `index.html` in Chrome/Firefox and in Safari and open the console and note that it fails in Safari but not the other browsers.