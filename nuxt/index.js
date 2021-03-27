const { resolve } = require('path');

export default function(options) {
  this.addPlugin({
    options,
    src: resolve(__dirname, 'plugin.js'),
  });
}

module.exports.meta = require('../package.json');
