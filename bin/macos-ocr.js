#!/usr/bin/env node

'use strict';

const { EOL } = require('os');
const path = require('path');
const { program } = require('commander');
const { macosOcr } = require('../');

const { version } = require('../package');

program.option('-v, --version').option('-p, --path <string>', 'image path');

program.parse();

const options = program.opts();

if (options.version) {
  console.info('%s  %s%s', EOL, version, EOL);
  process.exit(0);
}

if (options.path) {
  ocr();
}

async function ocr() {
  const imageUrl = path.resolve(process.cwd(), options.path);
  const result = await macosOcr({ imageUrl });
  console.log(result);
}
