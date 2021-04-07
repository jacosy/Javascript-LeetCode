class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (!head) {
    return null;
  }
  
  let preNode = head;
  let node = head.next;  
  while (node) {
    if (node.val === val) {
      preNode.next = node.next;
    } else {
      preNode = node;
    }
    node = node.next;
  }
  
  return head.val === val ? head.next : head;
};

const head = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(
      6,
      new ListNode(
        3,
        new ListNode(
          4,
          new ListNode(
            5,
            new ListNode(6)
          )
        )
      )
    )
  )
);
console.log(`Remove Node Val: 6 from Linked List: ${head}`, removeElements(head, 6));