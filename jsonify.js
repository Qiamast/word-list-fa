'use strict';
var fs = require('fs');
var wordListPath = require('./').path;
var words = fs.readFileSync(wordListPath, 'utf8').split('\n');

fs.writeFileSync('./words.json', JSON.stringify(words, null, 2));
