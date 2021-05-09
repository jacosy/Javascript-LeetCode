function climbStairs(n: number): number {  
  if (n <= 2) {
    return n;
  }

  let pre1 = 2;
  let pre2 = 1;
  let cur = 3;
  while (cur !== n) {
    [pre1, pre2] = [pre1 + pre2, pre1];
    cur += 1;
  }
  return pre1 + pre2;
};

const steps = 10;
console.log(`How many ways to climb ${steps}th steps by 1 or 2 steps each time?`, climbStairs(steps));

export {};