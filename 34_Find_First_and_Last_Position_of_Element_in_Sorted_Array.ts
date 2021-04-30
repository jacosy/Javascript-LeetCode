function searchRange(nums: number[], target: number): number[] {
  if (nums.length === 0) {
    return [-1, -1];
  }
  
  const ans = [-1, -1];
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.trunc((left + right) / 2);
    if (nums[mid] === target) {
      left = mid - 1;
      right = mid + 1;
      while (left > -1 && nums[left] === target) {
        left -= 1;
      }
      ans[0] = left + 1;
      while (right < nums.length && nums[right] === target) {
        right += 1;
      }
      ans[1] = right - 1;
      return ans;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }
  
  return ans;
};

const nums = [5,7,7,8,8,10];
const target = 8;
console.log(`Find First and Last Position of Element in Sorted Array - [${nums}] by the target - ${target}`, searchRange(nums, target));

export {};