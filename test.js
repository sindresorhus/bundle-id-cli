import execa from 'execa';
import test from 'ava';

test(async t => {
	const {stdout} = await execa('./cli.js', ['Safari'], {cwd: __dirname});
	t.is(stdout, 'com.apple.Safari');
});
