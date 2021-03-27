// Solution 1
function nextGreatestLetter(letters: string[], target: string): string {  
  let left = 0;
  let right = letters.length - 1;
  if (letters[right] <= target) {
    return letters[left];
  }
  
  let result = letters[right];
  while (left <= right) {
    const mid = Math.floor((left + right)/2);
    if (target === letters[mid]) {
      left = mid + 1;
    } else if (target > letters[mid]) {
      left = mid + 1;
    } else if (target < letters[mid]) {
      result = letters[mid] < result ? letters[mid] : result;
      right = mid - 1;
    }
  }
  return result;
}; 

// Solution 2
function nextGreatestLetter_S2(letters: string[], target: string): string {  
  let left = 0;
  let right = letters.length - 1;
  if (letters[right] <= target) {
    return letters[left];
  }
  
  const actTarget = String.fromCharCode(target.charCodeAt(0) + 1);
  while (left <= right) {
    const mid = Math.floor((left + right)/2);
    if (actTarget === letters[mid]) {
      right = mid - 1;
    } else if (actTarget > letters[mid]) {
      left = mid + 1;
    } else if (actTarget < letters[mid]) {
      right = mid - 1;
    }
  }
  return letters[left];
};

console.log("nextGreatestLetter 'a' of ['c', 'f', 'i'] is ", nextGreatestLetter(['c', 'f', 'i'], 'a'));
console.log("Solution 2: nextGreatestLetter 'a' of ['c', 'f', 'i'] is ", nextGreatestLetter_S2(['c', 'f', 'i'], 'a'));

/*
Time Complexity: O(logN)
Space Complexity: O(1)
*/