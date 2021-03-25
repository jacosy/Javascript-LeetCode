function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) {
    return 0;
  }

  let maximun = 0;
  const map = new Map<string, number>([[s[0], 0]]);
  let head: number = 0;
  let cursor: number = 1;
  while (cursor < s.length) {
    const dupIdx = map.get(s[cursor]);
    if (dupIdx >= head) {
      maximun = Math.max(maximun, cursor - head);
      head = dupIdx + 1;
    }
    map.set(s[cursor], cursor);
    cursor += 1;
  }
  return Math.max(maximun, cursor - head);
};

const s = 'pwwkew';
console.log('lengthOfLongestSubstring', lengthOfLongestSubstring(s));