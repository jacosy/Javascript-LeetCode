// Time Complexity: O(log n)
// Space Complexity: O(1)
function peakIndexInMountainArray(arr: number[]): number {
  let left = 0;
  let right = arr.length - 1;
  while (true) {
    const mid = Math.trunc((left + right)/2);
    if (arr[mid] > arr[mid-1] && arr[mid] > arr[mid+1]) {
      return mid;
    } else if (arr[mid] > arr[mid-1]) {
      left = mid;
    } else if (arr[mid] > arr[mid+1]) {
      right = mid;
    }
  }
};

// Time Complexity: O(n)
// Space Complexity: O(1)
function peakIndexInMountainArray_iterative(arr: number[]): number {
  let peakIdx = 0;
  while (arr[peakIdx+1] > arr[peakIdx]) {
    peakIdx += 1;
  }
  return peakIdx;
};

const arr: number[] = [24,69,100,99,79,78,67,36,26,19];
console.log(`By Binary Search Solution: The peak index in the mountain array: [${arr}] is`, peakIndexInMountainArray(arr));
console.log(`By Iterative Solution: The peak index in the mountain array: [${arr}] is`, peakIndexInMountainArray_iterative(arr));