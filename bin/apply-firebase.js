#!/usr/bin/env node

// eslint-disable-next-line @typescript-eslint/no-var-requires
const opts = require('opts');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs-extra');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const replace = require('replace-in-file');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cp = require('child_process');

const options = [
  {
    short: 'n',
    long: 'name',
    description: 'application name',
    value: true,
    required: true
  },
  {
    short: 'i',
    long: 'project-id',
    description: 'firebase project id',
    value: true,
    required: true
  }
];

opts.parse(options, true);

const name = opts.get('name');
const id = opts.get('project-id');
const distPath = path.join(__dirname, '../apps/', name);

if (!fs.existsSync(distPath)) {
  console.error('Specified path does not exists');
} else {
  fs.copySync(
    path.join(__dirname, 'firebase/.firebaserc'),
    path.join(distPath, '.firebaserc')
  );
  fs.copySync(
    path.join(__dirname, 'firebase/firebase.json'),
    path.join(distPath, 'firebase.json')
  );
  fs.copySync(
    path.join(__dirname, 'firebase/functions'),
    path.join(distPath, 'functions')
  );
  replace.sync({
    files: distPath + '/.firebaserc',
    from: /__template__/g,
    to: id
  });
  replace.sync({
    files: distPath + '/next.config.js',
    from: "distDir: '.next'",
    to: "distDir: 'dist/functions/next'"
  });

  const dependencies = ['firebase-admin', 'firebase-functions'];
  const devDependencies = [
    'cpx',
    'cross-env',
    'firebase-tools',
    'rimraf',
    'tslint',
    'tslint-react',
    'typescript'
  ];

  cp.spawnSync('yarn', ['add'].concat(dependencies), {
    cwd: distPath
  });
  cp.spawnSync('yarn', ['add', '-D'].concat(devDependencies), {
    cwd: distPath
  });

  const packageJSONPath = path.join(distPath, 'package.json');
  const packageJSON = fs.readJSONSync(packageJSONPath);
  packageJSON.scripts['preserve'] =
    'yarn clean && yarn build-public && yarn build-functions && yarn build-app && yarn copy-deps && yarn install-deps';
  packageJSON.scripts['serve'] = 'cross-env NODE_ENV=production firebase serve';
  packageJSON.scripts['deploy'] = 'yarn clean && firebase deploy';
  packageJSON.scripts['clean'] = 'rimraf "dist"';
  packageJSON.scripts['build-app'] = 'next build';
  packageJSON.scripts['build-app-permission'] =
    'chmod 755 dist/functions/next/static/media/*.svg';
  packageJSON.scripts['build-public'] = 'cpx "public/**/*.*" "dist/public" -C';
  packageJSON.scripts['build-functions'] = 'tsc --project functions';
  packageJSON.scripts['lint-app'] = 'tslint --project ./';
  packageJSON.scripts['typecheck-app'] = 'tsc --project ./';
  packageJSON.scripts['lint-functions'] = 'tslint --project functions';
  packageJSON.scripts['copy-deps'] =
    'cpx "*{package.json,yarn.lock}" "dist/functions" -C';
  packageJSON.scripts['install-deps'] = 'cd "dist/functions" && yarn';
  packageJSON.scripts['firebase'] = 'yarn firebase';

  fs.writeJSONSync(packageJSONPath, packageJSON, { spaces: 2 });
}
