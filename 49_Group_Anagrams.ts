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

function groupAnagramsByHashing(strs: string[]): string[][] {
  const map = new Map<string, number>();
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i=0; i < lowerCaseLetters.length; i++) {
    map.set(lowerCaseLetters[i], 1 << i);
  }
  
  const anagramMap = new Map<string, string[]>();
  for (let s of strs) {
    let sum = 0;
    let charCodeSum = 0;
    for (let i=0; i < s.length; i++) {
      sum += map.get(s[i]) || 0;
      charCodeSum += s.charCodeAt(i);
    }
    const sumKey = `${sum}${charCodeSum}${s.length}`;

    if (anagramMap.has(sumKey)) {
      const anagrams = anagramMap.get(sumKey);
      anagrams?.push(s);
    } else {
      anagramMap.set(sumKey, [s]);
    }
  }
  
  return [...anagramMap.values()];
};

const strs = ["eat","tea","tan","ate","nat","bat","sao","hay","hay","rig","rig"];
console.log(`Group Anagrams of "[${strs}]"`, groupAnagrams(strs));
console.log(`Group Anagrams of "[${strs}]" By Using Hashing Function`, groupAnagramsByHashing(strs));