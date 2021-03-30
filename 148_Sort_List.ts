class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function sortList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  const lnArr: number[] = [];
  let curNode = head;
  while (curNode) {
    lnArr.push(curNode.val);
    curNode = curNode.next;
  }
  
  lnArr.sort((a, b) => a <= b ? -1 : 1);
  const result: ListNode = new ListNode(lnArr[0]);
  curNode = result;
  for (let i=1; i < lnArr.length; i++) {
    curNode.next = new ListNode(lnArr[i]);
    curNode = curNode.next;
  }
  return result;
};

/*
  time complexity: O(nlogn)
  space complexity: O(n), n is the length of the input listNode
*/

// [-1,5,3,4,0]
const head: ListNode = new ListNode(
  -1,
  new ListNode(
    5,
    new ListNode(
      3,
      new ListNode(
        4,
        new ListNode(0)
      )
    )
  )
);
console.log(`Sort Link List: ${head}`, sortList(head));