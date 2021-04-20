function combinationSum2(candidates: number[], target: number): number[][] {
  const ans: number[][] = [];
  const len = candidates.length;
  candidates.sort((a, b) => a <= b ? -1 : 1);
  backtrack([], 0, target);
  return ans;
  
  function backtrack(path: number[], startIdx: number, target: number): void {   
    let prev = -1;

    for (let i=startIdx; i < len; i++) {
      if (candidates[i] === prev) {
        continue;
      }

      prev = candidates[i];
      const remain = target - candidates[i];
      const copyPath = Array.from(path);
      copyPath.push(candidates[i]);
      if (remain === 0) {
        ans.push(copyPath);
      } else if (remain > 0) {
        backtrack(copyPath, i+1, remain);
      }
    }
  }
};

const candidates = [10,1,2,7,6,1,5];
const target = 8;
console.log(`find all unique combinations in [${candidates}] where the candidate numbers sum to ${target}.`, combinationSum2(candidates, target));