'use strict';
module.exports = {
  path: __dirname + '/words.txt',
  getWords: function () {
    return require('./words.json')
  }
};
