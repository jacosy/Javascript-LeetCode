function letterCasePermutation(S: string): string[] {
  const ans: string[] = [];
  backtrack(0, '');
  return ans;
  
  function backtrack(idx: number, letters: string): void {
    if (idx >= S.length) {
      ans.push(letters);
    } else {
      if (S[idx] >= '0' && S[idx] <= '9') {
        backtrack(idx + 1, letters + S[idx]);
      } else {
        backtrack(idx + 1, letters + S[idx].toLowerCase());
        backtrack(idx + 1, letters + S[idx].toUpperCase());
      }
    }
  }
};

const S = 'a1b2C3';
console.log(`The letter case permutation of string "${S}" is`, letterCasePermutation(S));