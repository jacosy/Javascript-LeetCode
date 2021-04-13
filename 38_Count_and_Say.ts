function countAndSay(n: number): string {
  if (n === 1) {
    return '1';
  } else if (n === 2) {
    return '11';
  }

  const result: string[] = [];
  const pre = countAndSay(n - 1);
  const preLen = pre.length;
  let count = 1;
  for (let i = 1; i < preLen; i++) {
    if (pre[i - 1] === pre[i]) {
      count += 1;
    } else {
      result.push(count + pre[i - 1]);
      count = 1;
    }
  }

  if (count > 1 || pre[preLen - 2] !== pre[preLen - 1]) {
    result.push(count + pre[preLen - 1]);
  }
  return result.join('');
};

const n = 5;
console.log(`Count and Say '${n}' is`, countAndSay(n));
const n2 = 6;
console.log(`Count and Say '${n2}' is`, countAndSay(n2));