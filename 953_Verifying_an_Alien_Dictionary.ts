function isAlienSorted(words: string[], order: string): boolean {
  const orderMap = new Map<string, number>();
  for (let i=0; i < order.length; i++) {
    orderMap.set(order[i], i+1);
  }
  
  const len = words.length;
  const maxWordLen = words.reduce((max, w) => Math.max(max, w.length), 0);
  let wordsSorted: number = 0;
  let charIdx: number = 0;
  while (len - wordsSorted > 1 && charIdx < maxWordLen) {
    for (let i = 1; i < len - wordsSorted; i++) {
      const cur = orderMap.get(words[i-1][charIdx]) || -1;
      const next = orderMap.get(words[i][charIdx]) || -1;
      if (cur > next)  {
        return false;
      } else if (cur < next) {
        wordsSorted += 1;
      }
    }
    charIdx += 1;
  }
  return true;
};

const words = ["word","world","row"];
const order = 'worldabcefghijkmnpqstuvxyz';
console.log(`Is words: [${words}] Alien Sorted by the order "${order}"?`, isAlienSorted(words, order));