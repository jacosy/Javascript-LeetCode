function isIdealPermutation(A: number[]): boolean {  
  let curMax = -1;
  for (let i=1; i < A.length; i++) {
    if (curMax > A[i]) {
      return false;
    }
    curMax = Math.max(A[i-1], curMax);
  }
  return true;
};


const A = [1,0,2];
const A2 = [2,1,0];
console.log(`isIdealPermutation [${A}]: `, isIdealPermutation(A));
console.log(`isIdealPermutation [${A2}]: `, isIdealPermutation(A2));
