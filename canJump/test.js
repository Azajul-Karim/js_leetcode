const canJump = require('./index');

test('canJump is a function', () => {
  expect(typeof canJump).toEqual('function');
});

test('canJump returns true for [2,3,1,1,4]', () => {
  expect(canJump([2,3,1,1,4])).toBeTruthy();
});

test('canJump returns false for [3,2,1,0,4]', () => {
  expect(canJump([3,2,1,0,4])).toBeFalsy();
});