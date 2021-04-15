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

const n = 10;
console.log(`Fibonacci Number - '${n-2}' is`, fib(n-2));
console.log(`Fibonacci Number - '${n-1}' is`, fib(n-1));
console.log(`Fibonacci Number - '${n}' is`, fib(n));