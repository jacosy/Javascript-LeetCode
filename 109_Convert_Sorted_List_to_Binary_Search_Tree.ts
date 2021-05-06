import { isCommaListExpression } from "typescript"

// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

// Definition for a binary tree node.
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}


function sortedListToBST(head: ListNode | null): TreeNode | null {
  if (!head) {
    return null;
  }
  
  return bstHelper(head, null);
  
  function bstHelper(head: ListNode | null, tail: ListNode | null): TreeNode | null {    
    if (head === tail) {
      return null;
    }

    let slow = head;
    let fast = head;
    while (fast !== tail && fast!.next !== tail) {
      slow = slow!.next;
      fast = fast!.next!.next;
    }
    const tn = new TreeNode(slow!.val);
    tn.left = bstHelper(head, slow);
    tn.right = bstHelper(slow!.next, tail);
    return tn;
  }
};

const head = new ListNode(
  -10,
  new ListNode(
    -3,
    new ListNode(
      0,
      new ListNode(
        5,
        new ListNode(
          9,
          new ListNode(10) 
        )
      )
    )
  )
);
console.log(`Convert Sorted List: ${head} to Binary Search Tree`, sortedListToBST(head));