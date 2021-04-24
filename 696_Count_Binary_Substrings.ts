function countBinarySubstrings(s: string): number {
  let ans = 0;
  let startIdx = 0;
  let preVal = s[0] === '0' ? -1 : 1;
  let preSum = 0;
  for (let i = 0; i < s.length; i++) {
    const val = s[i] === '0' ? -1 : 1;
    const sum = preSum + val;
    if (sum === 0) {
      ans += 1;
      if (val === preVal) {
        preSum = (i - startIdx + 1) * val;
      } else {
        preSum = val;
        startIdx = i;
      }
    } else if (val === preVal) {
      if (Math.abs(sum) < Math.abs(preSum)) {
        ans += 1;
      }
      preSum = sum;
    } else if (val !== preVal) {
      ans += 1;
      if (Math.abs(sum) > Math.abs(preSum)) {
        preSum = i - startIdx === 1 ? val : (i - startIdx - 1) * preVal;
      } else {
        preSum = sum;
      }
      startIdx = i;
    }
    preVal = val;
  }
  return ans;
};

const s = '101010101101101';
console.log(`Count Binary Substrings - "${s}":`, countBinarySubstrings(s));

export {};