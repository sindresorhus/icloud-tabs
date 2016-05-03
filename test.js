import test from 'ava';
import m from './';

test('return iCloud tabs', async t => {
	t.true(Array.isArray(await m()));
});

test('return iCloud tabs sync', t => {
	t.true(Array.isArray(m.sync()));
});
