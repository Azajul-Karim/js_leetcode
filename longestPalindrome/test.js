const longestPalindrome = require('./index');

test('longestPalindrome is a function', () => {
  expect(typeof longestPalindrome).toEqual('function');
});

test('longestPalindrome returns "aba" or "bab" for "babad"', () => {
  const result = longestPalindrome('babad');
  expect(result === 'aba' || result === 'bab').toEqual(true);
});

test('longestPalindrome returns "bb" for "cbbd"', () => {
  expect(longestPalindrome('cbbd')).toEqual('bb');
});
