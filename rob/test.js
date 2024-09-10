const rob = require('./index.js');

test('rob function is defined', () => {
  expect(typeof rob).toEqual('function');
});

test('rob handles an empty array', () => {
  expect(rob([])).toEqual(0);
});

test('rob handles an array of length 1', () => {
  expect(rob([1])).toEqual(1);
});

test('rob handles an array of length 2', () => {
  expect(rob([1, 2])).toEqual(2);
});