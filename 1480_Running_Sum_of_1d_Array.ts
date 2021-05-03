function runningSum(nums: number[]): number[] {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
};

const nums = [1,2,3,4];
console.log(`a running sum of an array - [${nums}] as runningSum[i] = sum(nums[0]…nums[i]).`, runningSum(nums));

export {};