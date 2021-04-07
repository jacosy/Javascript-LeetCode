function halvesAreAlike(s: string): boolean {
  let head = 0;
  let tail = s.length - 1;
  let vowelCount = 0;
  const vowels = new Set<string>(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  
  while (head < tail) {
    if (vowels.has(s[head])) {
      vowelCount += 1;
    }
    if (vowels.has(s[tail])) {
      vowelCount -= 1;
    }
    head += 1;
    tail -= 1;
  }
  
  return vowelCount === 0;
};

const s = 'book';
console.log(`string '${s}' are halves alike?`, halvesAreAlike(s));