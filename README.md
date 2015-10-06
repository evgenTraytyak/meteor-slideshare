# meteor-slideshare
Scraping presentation slides from slideshare

## Installation

`meteor add traytyak:slideshare`

## Usage

Run `getById` method on the `Slideshare` variable which returns `Promise` of scraping result and then call the `then` method on it.

*server.js:*
```js
Slideshare.getById(/* presentation id */).then(
    result => console.log(result),
    error => console.log(error)
);
```

`result` it's an object which contains the array of slides url with different sizes:

```js
result = {
    small: [], // max-height equal 320px
    normal: [], // max-height equal 638px
    full: [] // max-height equal 1024px
}
```
