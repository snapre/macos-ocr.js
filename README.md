# WIP macos-ocr.js

[![NPM version][npm-image]][npm-url]
[![CI][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/macos-ocr.js.svg
[npm-url]: https://npmjs.org/package/macos-ocr.js
[ci-image]: https://github.com/snapre/macos-ocr.js/actions/workflows/ci.yml/badge.svg
[ci-url]: https://github.com/snapre/macos-ocr.js/actions/workflows/ci.yml
[codecov-image]: https://img.shields.io/codecov/c/github/snapre/macos-ocr.js.svg?logo=codecov
[codecov-url]: https://codecov.io/gh/snapre/macos-ocr.js
[node-image]: https://img.shields.io/badge/node.js-%3E=_12-green.svg
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/macos-ocr.js.svg
[download-url]: https://npmjs.org/package/macos-ocr.js

## Build
```bash
bash ./scripts/build.sh
```

## Run
```bash
node ./sample/ocr.js
```

## Usage
```js
const { macosOcr } = require('macos-ocr.js');
const path = require('path');

(async function main() {
  const result = await macosOcr({
    imageUrl: path.join(__dirname, 'img.png'),
  });
  console.log(result);
})();
```
```js
// result
[
  {
    word: 'Hello world',
    rect: { left: 126, top: 54, width: 326, height: 60 },
    confidence: 0.5
  },
  ...
]
```