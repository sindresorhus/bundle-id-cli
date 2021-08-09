import execa from 'execa';
import test from 'ava';

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['Safari']);
	t.is(stdout, 'com.apple.Safari');
});
