function minimumTotal(triangle: number[][]): number {
  const map = new Map<string, number>();
  return traverse(0, 0, 0);
  
  function traverse(arrIdx: number, idx: number, sum: number): number {
    if (arrIdx === triangle.length) {
      return sum;
    }
    
    const nodeVal = triangle[arrIdx][idx];
    const key = `${arrIdx}-${idx}`;
    if (map.has(key)) {
      sum += map.get(key)!;
    } else {
      const sum1 = traverse(arrIdx + 1, idx, sum + nodeVal);
      const sum2 = traverse(arrIdx + 1, idx + 1, sum + nodeVal);
      const minSum = Math.min(sum1, sum2);
      map.set(key, minSum - sum);
      sum = minSum;
    }

    return sum;
  }
};

function minimumTotalByFlipTriangelUpsideDown(triangle: number[][]): number {
  const triLen = triangle.length;  
  const ans = [...triangle[triLen - 1]];
  for (let i = triLen - 2; i >= 0; i--) {
    for (let j = 0; j <= triangle[i].length; j++) {
      ans[j] = triangle[i][j] + Math.min(ans[j], ans[j+1]);
    }
    ans.pop();
  }
  return ans[0];
};

const triangle = [[2],[3,4],[6,5,7],[4,1,8,3]];
console.log(`The minimun sum of the triangle: [${triangle}] is`, minimumTotal(triangle));
console.log(`The minimun sum of the triangle: [${triangle}] by fliping the triangle upside down is`, minimumTotalByFlipTriangelUpsideDown(triangle));

export {};