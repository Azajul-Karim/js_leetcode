function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sChatCounts = {};

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    sChatCounts[sChar] = sChatCounts[sChar] + 1 || 1;
  }

  for (let i = 0; i < t.length; i++) {
    const tChar = t[i];
    if (!sChatCounts[tChar]) {
      return false;
    }
    sChatCounts[tChar]--;
  }
  return true;
}

module.exports = isAnagram;
