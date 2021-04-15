function fib(n: number): number {
  const map = new Map<number, number>([
    [0, 0],
    [1, 1]
  ]);
  
  return helper(n);
  
  function helper(n: number): number {    
    if (map.has(n)) {
      return map.get(n)!;
    }

    const ans = helper(n-1) + helper(n-2);
    map.set(n, ans);
    return ans;
  }
};

function fib_buttomUp(n: number): number {
  if (n < 2) {
    return n;
  }
  
  let pre = 0;
  let sum = 1;
  for (let i=2; i <= n; i++) {
    sum += pre;
    pre = sum - pre;
  }
  return sum;
};

const n = 10;
console.log(`Fibonacci Number - '${n-2}' is`, fib(n-2));
console.log(`Fibonacci Number - '${n-1}' is`, fib(n-1));
console.log(`Fibonacci Number - '${n}' is`, fib(n));

console.log(`Fibonacci Number by Bottom Up Approach - '${n-2}' is`, fib_buttomUp(n-2));
console.log(`Fibonacci Number by Bottom Up Approach - '${n-1}' is`, fib_buttomUp(n-1));
console.log(`Fibonacci Number by Bottom Up Approach - '${n}' is`, fib_buttomUp(n));