function findDuplicate_Sorting(nums: number[]): number {
  nums.sort((a, b) => a <= b ? -1 : 1);
  let pre = nums[0];
  for (let n = 1; n < nums.length; n++) {
    const cur = nums[n];
    if (pre === cur) {
      return pre;
    }
    pre = cur;
  }
  return pre;
};

function findDuplicate_Set(nums: number[]): number {
  let ans: number = 0;
  const set = new Set<number>();  
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (set.has(cur)) {
      ans = cur;
      break;
    }
    set.add(cur);
  }
  return ans;
};

function findDuplicate_FastSlowPointers(nums: number[]): number {
  let slow = nums[0];
  let fast = nums[nums[0]];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  slow = 0;
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow
};
const nums = [1,3,4,2,2];
console.log(`Find the duplicate number in the array: [${nums}] by sorting:`, findDuplicate_Sorting(nums));
console.log(`Find the duplicate number in the array: [${nums}] by using Set:`, findDuplicate_Set(nums));
console.log(`Find the duplicate number in the array: [${nums}] by using Fast & Slow Pointers:`, findDuplicate_FastSlowPointers(nums));

export {};