#!/usr/bin/env node

// eslint-disable-next-line @typescript-eslint/no-var-requires
const opts = require('opts');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs-extra');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const replace = require('replace-in-file');

const options = [
  {
    short: 'n',
    long: 'name',
    description: 'application name',
    value: true,
    required: true
  }
];

opts.parse(options, true);

const name = opts.get('name');
const sourcePath = path.join(__dirname, '../apps/__template__');
const distPath = path.join(__dirname, '../apps/', name);

if (fs.existsSync(distPath)) {
  console.error(
    'Specified path have already exists. Skip to generate apps. [' + name + ']'
  );
} else if (!/^[a-z0-9-_]+$/.test(name)) {
  console.error(
    'application name can be specified only lower character, number, hyphen, lodash'
  );
} else {
  fs.copySync(sourcePath, distPath);
  replace.sync({
    files: distPath + '/**/*',
    from: /__template__/g,
    to: name
  });
  // package name could not start with _
  replace.sync({
    files: distPath + '/**/package.json',
    from: /"template"/g,
    to: '"' + name + '"'
  });
}
