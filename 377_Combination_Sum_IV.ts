function combinationSum4(nums: number[], target: number): number {
  const map = new Map<number, number>();
  return helper(target);
  
  function helper(target: number): number {
    if (map.has(target)) {
      return map.get(target)!;
    }

    let combinationCount = 0;
    for (let n of nums) {
      const remain = target - n;
      if (remain > 0) {
        combinationCount += helper(remain);
      } else if (remain === 0) {
        combinationCount += 1;
      }
    }
    map.set(target, combinationCount);
    return combinationCount;
  }
};

const nums = [2, 1, 3];
const target = 35;
console.log(`The combinations of the target: ${target} by the number array: [${nums}] are`, combinationSum4(nums, target));