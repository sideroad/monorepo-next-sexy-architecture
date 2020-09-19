/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')(['shared', 'types']);

/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

module.exports = withTM({
  distDir: '.next',
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    secretKey: process.env.SOMETHING_ABOUT_SECRET_KEY // Pass through env variables
  }
});
