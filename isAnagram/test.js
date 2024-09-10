const isAnagram = require('./index');

test('isAnagram is a function', () => {
  expect(typeof isAnagram).toEqual('function');
});

test('isAnagram is an anagram', () => {
  expect(isAnagram('anagram', 'nagaram')).toBeTruthy();
});

test('isAnagram is not an anagram', () => {
  expect(isAnagram('rat', 'car')).toBeFalsy();
});