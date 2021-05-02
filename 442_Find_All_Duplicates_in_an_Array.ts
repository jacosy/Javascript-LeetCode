function findDuplicates(nums: number[]): number[] {
  const ans: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const idx = Math.abs(nums[i]) - 1;
    nums[idx] *= -1;
    if (nums[idx] > 0) {
      ans.push(idx + 1);
    }
  }
  return ans;
};

const nums = [10,2,5,10,9,1,1,4,3,7];
console.log(`find all the duplicate values in the array: [${nums}]`, findDuplicates(nums));