const lengthOfLIS = require('./index.js');

test('lengthOfLIS function exists', () => {
  expect(lengthOfLIS).toBeDefined();
});

test('lengthOfLIS returns the length of the longest increasing subsequence', () => {
  expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toEqual(4);
});

test('lengthOfLIS returns the length of the longest increasing subsequence', () => {
  expect(lengthOfLIS([0, 1, 0, 3, 2, 3])).toEqual(4);
});