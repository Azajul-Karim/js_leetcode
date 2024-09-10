const groupAnagrams = require("./index");

test("groupAnagrams is a function", () => {
  expect(typeof groupAnagrams).toEqual("function");
});

test("groupAnagrams returns an array of arrays", () => {
  expect(Array.isArray(groupAnagrams(["a"]))).toEqual(true);
  expect(Array.isArray(groupAnagrams(["a"])[0])).toEqual(true);
});

test("groupAnagrams works correctly", () => {
  expect(groupAnagrams(["a"])).toEqual([["a"]]);
  expect(groupAnagrams(["a", "b"])).toEqual([["a"], ["b"]]);
  expect(groupAnagrams(["a", "b", "ab"])).toEqual([["a"], ["b"], ["ab"]]);
  expect(groupAnagrams(["a", "b", "ab", "ba"])).toEqual([
    ["a"],
    ["b"],
    ["ab", "ba"],
  ]);
  expect(groupAnagrams(["a", "b", "ab", "ba", "abc", "bac", "cab"])).toEqual([
    ["a"],
    ["b"],
    ["ab", "ba"],
    ["abc", "bac", "cab"],
  ]);
});
