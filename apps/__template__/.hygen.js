const shortid = require('shortid');

module.exports = {
  templates: `${__dirname}/../../.hygen/_templates`,
  helpers: {
    assignId: () => shortid.generate()
  }
};