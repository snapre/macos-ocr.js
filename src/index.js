const { exec } = require("child_process");
const path = require("path");

exports.macosOcr = (opts) => {
  const { imageUrl } = opts;
  const exePath = path.join(__dirname, "macos-ocr/macos-ocr");
  let p = exec(`${exePath} ${imageUrl}`);
  return new Promise((resolve, reject) => {
    p.stdout.on("data", (data) => {
      const result = JSON.parse(data);
      resolve(result);
    });
    p.stderr.on("data", (error) => {
      reject(JSON.parse(error));
    });
  });
};
