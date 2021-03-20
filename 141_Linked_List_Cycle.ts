class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


function hasCycle(head: ListNode | null): boolean {
  let slow = head?.next;
  let fast = head?.next?.next;
  while (fast) {
    if (fast === slow) {
      return true;
    }
    slow = slow.next;
    fast = fast.next?.next;
  }
  return false;
};

const circle = new ListNode(2, new ListNode(0, new ListNode(-4)));
const head = new ListNode(3, circle);
head.next.next.next.next = circle;

console.log('hasCycle', hasCycle(head));