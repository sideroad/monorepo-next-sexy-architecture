/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')(['shared', 'types']);

/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

module.exports = withTM({
  i18n: {
    locales: ['en-us', 'ja-jp'],
    defaultLocale: 'en-us'
  },
  distDir: '.next',
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  }
});
