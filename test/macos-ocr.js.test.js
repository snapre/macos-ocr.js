'use strict';

const assert = require('assert');
const path = require('path');
const { macosOcr } = require('../');

describe('test/macos-ocr.js.test.js', () => {
  it('should be ok', async () => {
    const imageUrl = path.join(__dirname, 'fixtures/img.png');
    const result = await macosOcr({ imageUrl });
    assert.deepEqual(result, [
      {
        word: 'Hello world',
        rect: { left: 126, top: 54, width: 326, height: 60 },
        confidence: 0.5,
      },
    ]);
  });
});
