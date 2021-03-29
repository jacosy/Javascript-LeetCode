function canMakeArithmeticProgression(arr: number[]): boolean {
  arr.sort((a, b) => a <= b ? -1 : 1);
  for (let i=1; i < arr.length - 1; i++) {
    if (arr[i+1] - arr[i] !== arr[i] - arr[i-1]) {
      return false;
    }
  }
  return true;
};

const arr: number[] = [4, 2, 0];
const arr2: number[] = [1, 9, 0];
console.log(`canMakeArithmeticProgression ${arr2}`, canMakeArithmeticProgression(arr2));