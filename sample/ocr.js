const path = require('path');
const { macosOcr } = require('../');

(async function main() {
  const imageUrl = path.join(__dirname, 'img.png');
  console.log(imageUrl);

  const result = await macosOcr({
    imageUrl,
  });
  console.log(result);
})();
