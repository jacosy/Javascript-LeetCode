class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function isPalindrome(head: ListNode | null): boolean {
  if (!head) {
    return false;
  }

  const arr: number[] = [];
  let node = head;
  while (node) {
    arr.push(node.val);
    node = node.next;
  }

  const lastIdx = arr.length - 1;
  const halfLen = Math.trunc(arr.length / 2);
  for (let i = 0; i < halfLen; i++) {
    if (arr[i] !== arr[lastIdx - i]) {
      return false;
    }
  }
  return true;
};

const head = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(
      2,
      new ListNode(1)
    )
  )
);
console.log(`Linked_List: ${head} is palindrome?`, isPalindrome(head));