class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


function partition(head: ListNode | null, x: number): ListNode | null {
  if (!head) {
    return null;
  }

  const lHead = new ListNode();
  const geHead = new ListNode();
  let curNode: ListNode | null = head;
  let lCurNode = lHead;
  let geCurNode = geHead;

  while (curNode) {
    if (curNode.val < x) {
      lCurNode.next = curNode;
      lCurNode = curNode;
    } else {
      geCurNode.next = curNode;
      geCurNode = curNode;
    }
    curNode = curNode.next;
  }

  if (lCurNode.next) {
    while (lCurNode.next) {
      if (lCurNode.next.val >= x || !lCurNode.next) {
        lCurNode.next = geHead.next;
        break;
      }
      lCurNode = lCurNode.next;
    }
  } else {
    lCurNode.next = geHead.next;
  }

  while (geCurNode.next) {
    if (geCurNode.next.val < x) {
      geCurNode.next = null;
      break;
    }
    geCurNode = geCurNode.next;
  }

  return lHead.next;
};

const head = new ListNode(
  1,
  new ListNode(
    4,
    new ListNode(
      3,
      new ListNode(
        2,
        new ListNode(
          5,
          new ListNode(2)
        )
      )
    )
  )
);

const partionKey = 3;
const partionArr: number[] = [];
let ln = partition(head, partionKey);
while (ln) {
  partionArr.push(ln.val);
  ln = ln.next;
}
console.log(`Partion List: "${[1,4,3,2,5,2]}" by '${partionKey}'`, partionArr);