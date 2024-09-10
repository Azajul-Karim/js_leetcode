const isPalindrome = require('./index');

test('isPalindrome is a function', () => {
  expect(typeof isPalindrome).toEqual('function');
});

test('isPalindrome handles "A man, a plan, a canal: Panama"', () => {
  expect(isPalindrome('A man, a plan, a canal: Panama')).toEqual(true);
});

test('isPalindrome handles "race a car"', () => {
  expect(isPalindrome('race a car')).toEqual(false);
});

test('isPalindrome handles an empty string', () => {
  expect(isPalindrome(' ')).toEqual(true);
});
