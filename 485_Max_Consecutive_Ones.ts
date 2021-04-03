function findMaxConsecutiveOnes(nums: number[]): number {
  let max = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count += 1;
    } else {
      max = Math.max(count, max);
      count = 0;
    }
  }

  return Math.max(count, max);
};

const arr = [1, 1, 0, 1, 1, 1, 0, 1];
console.log(`findMaxConsecutiveOnes, [${arr}]:`, findMaxConsecutiveOnes(arr));