function numDifferentIntegers(word: string): number {
  const set = new Set<string>();
  let numStr: string = '';
  for (let c of word) {
    if (c >= '0' && c <= '9') {
      numStr += c;
      continue;
    }

    if (numStr.length > 0) {
      set.add(getNumber(numStr));
      numStr = '';
    }
  }
  
  if (numStr.length > 0) {
    set.add(getNumber(numStr));
  }
  
  return set.size;
  
  function getNumber(word: string): string {
    const numStr: string = '0';
    for (let i=0; i < word.length; i++) {
      if (word[i] !== '0') {
        return word.substring(i);
      }
    }
    return numStr;
  }
};

const word1 = '2393706880236110407059624696967828762752651982730115221690437821508229419410771541532394006597463715513741725852432559057224478815116557380260390432211227579663571046845842281704281749571110076974264971989893607137140456254346955633455446057823738757323149856858154529105301197388177242583658641529908583934918768953462557716z97438020429952944646288084173334701047574188936201324845149110176716130267041674438237608038734431519439828191344238609567530399189316846359766256507371240530620697102864238792350289978450509162697068948604722646739174590530336510475061521094503850598453536706982695212493902968251702853203929616930291257062173c79487281900662343830648295410';
const word2 = 'leet1234code234';
const word3 = 'a1b01c001';
console.log(`Number of Different Integers in "${word1}": `, numDifferentIntegers(word1));
console.log(`Number of Different Integers in "${word2}": `, numDifferentIntegers(word2));
console.log(`Number of Different Integers in "${word3}": `, numDifferentIntegers(word3));