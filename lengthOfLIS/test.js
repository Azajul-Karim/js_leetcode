const coinChange = require('./index.js');

test('coinChange function exists', () => {
  expect(coinChange).toBeDefined();
});

test('coinChange returns the fewest number of coins that you need to make up that amount', () => {
  expect(coinChange([1, 2, 5], 11)).toEqual(3);
});

test('coinChange returns the fewest number of coins that you need to make up that amount', () => {
  expect(coinChange([2], 3)).toEqual(-1);
});