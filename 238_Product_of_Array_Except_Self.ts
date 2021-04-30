function productExceptSelf(nums: number[]): number[] {
  let product = 1;
  let zeroCount = 0;
  let productWithoutZero = 1;    
  nums.forEach(n => {
    if (n === 0) {
      zeroCount += 1;
    } else {
      productWithoutZero *= n;
    }
    product *= n;
  });

  if (zeroCount > 1) {
    return (new Array<number>(nums.length)).fill(0);
  }
  
  return nums.map(n => {
    if (n === 0) {
      return productWithoutZero;
    } else {
      return product / n;
    }
  });
};

const nums = [1,2,0,9,3,4];
console.log(`The product of the array - [${nums}] except self:`, productExceptSelf(nums));
const nums2 = [0,2,0,-2,3,7];
console.log(`The product of the array - [${nums2}] except self:`, productExceptSelf(nums2));

export {};