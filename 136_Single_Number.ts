function singleNumber(nums: number[]): number {
  let ans: number = 0;
  for (let i = 0; i < nums.length; i++) {
    ans ^= nums[i];
  }
  return ans;
};

const nums = [4,1,2,1,2];
console.log(`Single Number in the array: [${nums}] is`, singleNumber(nums));