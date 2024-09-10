const lengthOfLongestSubstring = require('./index');

test('lengthOfLongestSubstring is a function', () => {
  expect(typeof lengthOfLongestSubstring).toEqual('function');
});

test('lengthOfLongestSubstring handles "abcabcbb"', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
});

test('lengthOfLongestSubstring handles "bbbbb"', () => {
  expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
});
