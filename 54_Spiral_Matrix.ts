function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = [...matrix[0]];
  let hIdx: number = matrix[0].length - 1;
  let vIdx: number = 0;
  let hLen: number = matrix[0].length;
  let vLen: number = matrix.length - 1;
  while (hLen > 0 && vLen > 0) {
    appendRight(vIdx+1, vIdx+vLen, hIdx);
    if (hLen > 0 && vLen > 0) {
      appendBottom(vIdx, hIdx-1, hIdx-hLen);
    }
    if (hLen > 0 && vLen > 0) {
      appendLeft(vIdx-1, vIdx-vLen, hIdx);
    }
    if (hLen > 0 && vLen > 0) {
      appendTop(vIdx, hIdx+1, hIdx+hLen);
    }
  }
  return result;
  
  // include start, exclude end, just like normal array iterator
  function appendTop(arrIdx: number, start: number, end: number): void {
    for (let i=start; i <= end; i++) {
      result.push(matrix[arrIdx][i]);
    }
    hIdx = end;
    vLen -= 1;
  }
  
  function appendRight(arrStartIdx: number, arrEndIdx: number, idx: number): void { 
    for (let i=arrStartIdx; i <= arrEndIdx; i++) {
      result.push(matrix[i][idx]);
    }
    vIdx = arrEndIdx;
    hLen -= 1;
  }
  
  function appendBottom(arrIdx: number, start: number, end: number): void {    
    for (let i=start; i >= end; i--) {
      result.push(matrix[arrIdx][i]);
    }
    hIdx = end;
    vLen -= 1;
  }
  
  function appendLeft(arrStartIdx: number, arrEndIdx: number, idx: number): void {
    for (let i=arrStartIdx; i >= arrEndIdx; i--) {
      result.push(matrix[i][idx]);
    }
    vIdx = arrEndIdx;
    hLen -= 1;
  }
};


const matrix = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];
console.log('spiralOrder of a 5*5 matrix', spiralOrder(matrix));