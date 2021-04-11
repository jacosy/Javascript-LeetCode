class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  let curNode = head;
  const dummyOH = new ListNode();
  let curOH = dummyOH;
  const dummyEH = new ListNode();
  let curEH = dummyEH;

  while (curNode) {
    curOH.next = curNode;
    curOH = curNode;
    curEH.next = curNode.next;
    curEH = curNode.next;
    curNode = curNode.next?.next;
  }

  curOH.next = dummyEH.next;
  return dummyOH.next;
}

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
console.log(`Odd Even Linked List, head = [1,2,3,4,5]`, oddEvenList(head));