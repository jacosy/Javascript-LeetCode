function leastBricks_brutalForce(wall: number[][]): number {
  const width = wall[0].reduce((accu: number, val) => accu + val, 0);
  const rowTrack: number[][] = wall.reduce((accu: number[][], row) => {
    accu.push([0, row[0]]);
    return accu;
  }, []);
  
  let ans: number = Math.min();
  for (let line=0; line < width; line++) {
    let bricks = 0;
    for (let i=0; i < wall.length; i++) {
      let curIdx = rowTrack[i][0];
      let curWidth = rowTrack[i][1];
      
      while (line > curWidth) {
        curIdx += 1;
        curWidth += wall[i][curIdx];
      }
      rowTrack[i][0] = curIdx;
      rowTrack[i][1] = curWidth;
        
      if (line === curWidth) {
        continue;
      } else if (line < curWidth) {
        bricks += 1;
      }
    }
    ans = Math.min(ans, bricks);
  }

  return ans;
};

function leastBricks(wall: number[][]): number {
  const map = new Map<number, number>();
  for (let i=0; i < wall.length; i++) {
    let widthSum = 0;
    for (let j=0; j < wall[i].length - 1; j++) {
      widthSum += wall[i][j];
      if (map.has(widthSum)) {
        map.set(widthSum, map.get(widthSum)! + 1);
      } else {
        map.set(widthSum, 1);
      }
    }
  }
  
  let maxOverlap = [...map.values()].reduce((pre, cur) => {
    return Math.max(pre, cur);
  }, 0)  
  return wall.length - maxOverlap;
};

/*
r: rows
n: items
width: the sum of the elements of a row

First Solution:
Time Complexity: O(width * r);
Space Complexity: O(1);

Second Solution:
Time Complexity: O(n);
Space Complexity: O(n);
*/

const wall = [
  [1,2,2,1],
  [3,1,2],
  [1,3,2],
  [2,4],
  [3,1,2],
  [1,3,1,1]
];
console.log(`The least bricks of the wall ${wall} are`, leastBricks(wall));

export {};