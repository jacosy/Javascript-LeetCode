function merge(intervals: number[][]): number[][] {
  if (intervals.length === 0) {
    return [];
  }
    
  intervals.sort((first, second) => first[0] <= second[0] ? -1 : 1);
  const result: number[][] = [intervals[0]];
  for (let i of intervals) {
    const lastIdx = result.length - 1;
    if (result[lastIdx][1] < i[0]) {
      result.push(i);
    } else {
      result[lastIdx][1] = Math.max(result[lastIdx][1], i[1]);
    }
  }
  return result;
};

const test: number[][] = [[1,3],[2,6],[8,10],[15,18]];
console.log('Test Result:', merge(test));