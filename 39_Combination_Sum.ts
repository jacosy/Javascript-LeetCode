function combinationSum(candidates: number[], target: number): number[][] {
  const solutions: number[][] = [];
  candidates.forEach((c, i) => {
    findSolution([], target, i);    
  });
  return solutions;

  function findSolution(subSol: number[], curVal: number, curIdx: number): void {
    const remaining = curVal - candidates[curIdx];
    const posSol = [...subSol, candidates[curIdx]];
    if (remaining === 0) {
      solutions.push(posSol);
    } else if (remaining > 0) {
      for (let i = curIdx; i < candidates.length; i++) {
        findSolution(posSol, remaining, i);
      }
    }
  }
};

console.log('candidates: [2,3,6,7], target: 7', combinationSum([2,3,6,7], 7));