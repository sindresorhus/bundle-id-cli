#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import {bundleIdSync} from 'bundle-id';

const cli = meow(`
	Usage
	  $ bundle-id <bundle-name>

	Example
	  $ bundle-id Safari
	  com.apple.Safari
`, {
	importMeta: import.meta,
});

if (cli.input.length === 0) {
	console.error('Specify a bundle name');
	process.exit(1);
}

console.log(bundleIdSync(cli.input[0]));
