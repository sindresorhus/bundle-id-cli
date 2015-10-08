#!/usr/bin/env node
/* eslint-disable no-mixed-spaces-and-tabs */
'use strict';
const meow = require('meow');
const bundleId = require('bundle-id');

const cli = meow(`
	Usage
	  $ bundle-id <bundle-name>

	Example
	  $ bundle-id Safari
	  com.apple.Safari
`);

if (cli.input.length === 0) {
	console.error('Expected a bundle name');
	process.exit(1);
}

bundleId(cli.input[0]).then(console.log);
