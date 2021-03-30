function balancedStringSplit(s: string): number {
  let count: number = 0;
  let currentState: number = 0;
  for (let i=0; i < s.length; i++) {
    currentState += s[i] === 'L' ? -1 : 1;
    if (currentState === 0) {
      count += 1;
    }
  }
  return count;
};

function balancedStringSplit_first(s: string): number {
  let count = 0;
  let sIdx = 0;
  let charCodeSum = 0;
  const mid = ('L'.charCodeAt(0) + 'R'.charCodeAt(0))/2;
  for (let i=1; i < s.length; i+=2) {
    charCodeSum += s[i-1].charCodeAt(0) + s[i].charCodeAt(0);
    if (charCodeSum / (i + 1 - sIdx) === mid) {
      count += 1;
      charCodeSum = 0;
      sIdx = i + 1;
    }
  }
  return count;
};

const input: string = 'RLRRRLLRLL';
console.log('Count Maximum Balanced Substring: ', balancedStringSplit(input));