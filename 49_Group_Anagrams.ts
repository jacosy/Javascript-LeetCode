function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  for (let s of strs) {
    const sorted = [...s].sort().join('');
    const anagrams = map.get(sorted);
    if (anagrams) {
      anagrams.push(s);
    } else {
      map.set(sorted, [s]);
    }
  }
  return [...map.values()];
};

const strs = ["eat","tea","tan","ate","nat","bat","sao","hay","hay","rig","rig"];
console.log(`Group Anagrams of "[${strs}]"`, groupAnagrams(strs));