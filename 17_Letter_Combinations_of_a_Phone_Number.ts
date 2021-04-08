function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return [];
  }

  const result: string[] = [];
  const map = new Map<string, string[]>([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'y', 'x', 'z']]
  ]);
  
  dfs(0, '');
  return result;
  
  function dfs(idx: number, s: string): void {
    if (idx < digits.length) {
      const letterArr = map.get(digits[idx]);
      for (let i=0; i < letterArr.length; i++) {
        dfs(idx + 1, s + letterArr[i]);
      }
      return;
    }
    result.push(s);
  }
};

const digits = '23';
console.log(`The combinations of the digits "${digits}" is`, letterCombinations(digits));