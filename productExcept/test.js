const productExceptSefl = require('./index');

test('productExceptSefl function is defined', () => {
  expect(typeof productExceptSefl).toEqual('function');
});

test('productExceptSefl handles an array of length 2', () => {
  expect(productExceptSefl([1, 2])).toEqual([2, 1]);
});

test('productExceptSefl handles an array of length 3', () => {  
  expect(productExceptSefl([1, 2, 3])).toEqual([6, 3, 2]);
});