function maxArea(height: number[]): number {  
  let left = 0;
  let right = height.length - 1;
  let max = -1; 
  
  while (left < right) {    
    if (height[left] === height[right]) {      
      max = Math.max(max, (right - left) * height[left]);
      left += 1;
      right -= 1;
    } else if (height[left] > height[right]) {      
      max = Math.max(max, (right - left) * height[right]);
      right -= 1;
    } else if (height[left] < height[right]) {
      max = Math.max(max, (right - left) * height[left]);
      left += 1;
    }
  }
    
  return max;
};

const height = [1,8,6,2,5,4,8,3,7];
console.log(`Container With Most Water of height: [${height}] is`, maxArea(height));