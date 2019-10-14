/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

module.exports = {
  distDir: '.next',
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
  publicRuntimeConfig: {
    isMocked: process.env.MOCKED === 'true'
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    secretKey: process.env.SOMETHING_ABOUT_SECRET_KEY // Pass through env variables
  }
};
