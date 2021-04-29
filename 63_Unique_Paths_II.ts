function uniquePathsWithObstacles_BottomUp(obstacleGrid: number[][]): number {
  const outerEnd = obstacleGrid.length - 1;
  const innerEnd = obstacleGrid[0].length - 1;
  if (obstacleGrid[outerEnd][innerEnd] === 1) {
    return 0;
  }

  const cache = new Map<string, number>();
  return traverse(0, 0);

  function traverse(outerIdx: number, innerIdx: number): number {
    const key = `${outerIdx}-${innerIdx}`;
    if (cache.has(key)) {
      return cache.get(key)!;
    }

    if (outerIdx === outerEnd && innerIdx === innerEnd) {
      return 1;
    }

    let pathCount = 0;
    if (obstacleGrid[outerIdx][innerIdx] === 0) {
      if (outerIdx + 1 <= outerEnd) {
        pathCount += traverse(outerIdx + 1, innerIdx);
      }
      if (innerIdx + 1 <= innerEnd) {
        pathCount += traverse(outerIdx, innerIdx + 1);
      }
    }
    cache.set(key, pathCount);

    return pathCount;
  }
};

function uniquePathsWithObstacles_TopDownWithoutExtraSpace(obstacleGrid: number[][]): number {  
  const outerLastIdx = obstacleGrid.length - 1;
  const innerLastIdx = obstacleGrid[0].length - 1;
  if (obstacleGrid[0][0] === 1 || obstacleGrid[outerLastIdx][innerLastIdx] === 1) {
    return 0;
  }
  
  for (let i=0; i <= outerLastIdx; i++) {
    for (let j=0; j <= innerLastIdx; j++) {
      if (i === 0 && j === 0) {
        obstacleGrid[i][j] = 1;
        continue;
      }

      if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = 0;
      } else {
        let pathCount = 0;
        if (i > 0) {
          pathCount += obstacleGrid[i-1][j];
        }
        if (j > 0) {
          pathCount += obstacleGrid[i][j-1];
        }
        obstacleGrid[i][j] = pathCount;
      }
    }
  }
  
  return obstacleGrid[outerLastIdx][innerLastIdx];
};

const obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]];
console.log(`The unique path (from bottom-up) for the obstacle grid is`, uniquePathsWithObstacles_BottomUp(obstacleGrid));
console.log(`The unique path (from top-down without extra space) for the obstacle grid is`, uniquePathsWithObstacles_TopDownWithoutExtraSpace(obstacleGrid));