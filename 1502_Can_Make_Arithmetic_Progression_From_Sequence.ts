function canMakeArithmeticProgression(arr: number[]): boolean {
  if (arr.length === 2) {
    return true;
  }

  arr.sort((a, b) => a <= b ? -1 : 1);
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== arr[i] - arr[i - 1]) {
      return false;
    }
  }
  return true;
};

function canMakeArithmeticProgression_dp(arr: number[]): boolean {
  if (arr.length === 2) {
    return true;
  }

  let min = arr[0];
  let max = arr[0];
  const track = new Set<number>();
  for (let i = 0; i < arr.length; i++) {
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
    track.add(arr[i]);
  }
  const distance = (max - min) / (arr.length - 1);

  for (let i = 0; i < arr.length; i++) {
    if (!track.has(min + distance * i)) {
      return false;
    }
  }
  return true;
};

const arr: number[] = [4, 6, 2];
const arr2: number[] = [1, 9, 0];
console.log(`canMakeArithmeticProgression ${arr2}`, canMakeArithmeticProgression(arr2));
console.log(`canMakeArithmeticProgression_dp ${arr}`, canMakeArithmeticProgression_dp(arr));