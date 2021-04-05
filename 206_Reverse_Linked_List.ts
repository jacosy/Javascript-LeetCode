class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  if (head) {
    return reverseNode(head);
  }
  return head;

  function reverseNode(head: ListNode | null): ListNode | null {
    if (!head.next) {
      return head;
    }
    const last = reverseNode(head.next);
    head.next.next = head;
    head.next = null;
    return last;
  }
};

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
console.log('reverseList: 1 -> 2 -> 3 -> 4 -> 5', reverseList(head));