'use strict';
var fs = require('fs');
var assert = require('assert');
var pathExists = require('path-exists');

it('should return list of words', function () {
	var path = require('./').path;

	assert(path.length > 0);
	assert(pathExists.sync(path));
	assert(fs.statSync(path).size > 1000);
});

it('should return json list of words', function () {
	var words = require('./').getWords();
	assert(words.length > 1000);
});
