function powerfulIntegers(x: number, y: number, bound: number): number[] {
  if (bound < 2) {
    return [];
  }
  if (x === 1 && y === 1) {
    return [2];
  }
  
  const ans = new Set<number>();
  let xp = 0;
  let curX = 1;
  let yp = 0;
  while (curX <= bound) {
    let sum = curX + 1;
    while (sum <= bound) {
      ans.add(sum);
      yp += 1;
      const curY = Math.pow(y, yp);
      if (curY === 1) {
        break;
      }
      sum = curX + curY;
    }
    yp = 0;
    xp += 1;
    curX = Math.pow(x, xp);
    if (curX === 1) {
      break;
    }
  }
  return [...ans.values()];
};

const x = 2;
const y = 3;
const bound = 10;
console.log(`All the powerful integers of x - ${x}, y - ${y} and target - ${bound} are`, powerfulIntegers(x, y, bound));

export {};