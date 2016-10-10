'use strict';
var fs = require('fs');
var normalize = require('persian-text').normalize;

// in.txt should come from a persian book or bulk of text or something
var input = fs.readFileSync('./in.txt').toString().replace('\n', ' ')
input = normalize(input);

var words = input.split(' ')
  .filter((w, ix) => w.length > 1)
  .sort()
  .filter((w, ix, self) => self.indexOf(w) === ix);

fs.writeFileSync('./words.txt', words.join('\n'));
