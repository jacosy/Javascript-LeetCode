class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

// use slow-fast pointers
function detectCycle(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  let slow = head.next;
  let fast = head.next?.next;
  let isCircle = false;
  while (fast) {
    if (fast === slow) {
      isCircle = true;
      break;
    }
    slow = slow.next;
    fast = fast.next?.next;
  }

  if (!isCircle) {
    return null;
  }

  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
};

// Use Set to get the start point of the circle (if there is any)
function detectCycle2(head: ListNode | null): ListNode | null {
  let curNode = head;
  const set = new Set<ListNode>();
  while (curNode) {
    if (set.has(curNode)) {
      return curNode;
    }
    set.add(curNode);
    curNode = curNode.next;
  }
  return null;
}

const circle = new ListNode(2, new ListNode(0, new ListNode(-4)));
const head = new ListNode(3, circle);
head.next.next.next.next = circle;

console.log('detectCycle', detectCycle(head));
console.log('detectCycle2', detectCycle2(head));