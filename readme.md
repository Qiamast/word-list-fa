# word-list-fa [![Build Status](https://travis-ci.org/mvalipour/word-list-fa.svg?branch=master)](https://travis-ci.org/mvalipour/word-list-fa)

> List of some Persian words

Useful if you're creating a word game or just want some Farsi words to work with.

Used by:

- [random-word-fa](https://github.com/mvalipour/random-word-fa).


## Install

```
$ npm install --save word-list-fa
```


## Usage

```js
var fs = require('fs');

// returns the path to the word list which is separated by `\n`
var wordListPath = require('word-list-fa');

var wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');
//=> [..., 'آبان', 'رفیق', ...]
```

## License

[MIT](/blob/master/license) © [Sindre Sorhus](http://sindresorhus.com)
and [Mo Valipour](http://mvalipour.github.io)
