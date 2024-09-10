const climbStairs = require('./index');

test('climbStairs is a function', () => {
  expect(typeof climbStairs).toEqual('function');
});

test('climbStairs handles 2 stairs', () => {
  expect(climbStairs(2)).toEqual(2);
});

test('climbStairs handles 3 stairs', () => {
  expect(climbStairs(3)).toEqual(3);
});