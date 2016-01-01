import childProcess from 'child_process';
import test from 'ava';

test.cb(t => {
	childProcess.execFile('./cli.js', ['Safari'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.is(stdout.trim(), 'com.apple.Safari');
		t.end();
	});
});
