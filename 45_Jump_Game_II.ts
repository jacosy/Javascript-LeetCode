function jump(nums: number[]): number {  
  const lastIdx = nums.length - 1;  
  if (lastIdx === 0) {
    return 0;
  }

  let jumpCount = 1;
  let curIdx = 0;
  while (curIdx + nums[curIdx] < lastIdx) {
    let nextMax = 0;
    let nextIdx = curIdx;
    for (let i = 1; i <= nums[curIdx]; i++) {
      if (nums[curIdx + i] + i >= nextMax) {
        nextMax = nums[curIdx + i] + i;
        nextIdx = curIdx + i;
      }
    }
    jumpCount += 1;
    curIdx = nextIdx;
  }
  return jumpCount;
};

const nums = [5,9,3,2,1,0,2,3,3,1,0,0];
console.log(`The minimum number of jumps to reach to the last index of the array: [${nums}] is`, jump(nums));

export {};