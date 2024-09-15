const containsDuplicate = require('./index.js');

test('containsDuplicate function is defined', () => {
  expect(typeof containsDuplicate).toEqual('function');
});

test('containsDuplicate returns true', () => {
  expect(containsDuplicate([1, 2, 3, 1])).toBeTruthy();
});