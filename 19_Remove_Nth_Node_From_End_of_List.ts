class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummyHead = new ListNode(0, head);
  let steps = 0;
  let slow = dummyHead;
  let fast = dummyHead;
  const lastNth = n + 1;
  while (fast) {
    if (steps >= lastNth) {
      slow = slow.next!;
    }
    fast = fast.next!;
    steps += 1;
  }
  slow.next = slow.next!.next;
  return dummyHead.next;
};

const lastNth = 2;
const head = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(
      3,
      new ListNode(
        4,
        new ListNode(5)
      )
    )
  )
);
console.log(`Remove the ${lastNth} from the end of the Linked List - ${head}`, removeNthFromEnd(head, lastNth));

export {};