class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}


function kthSmallest(root: TreeNode | null, k: number): number {
  return traverseNode(root);
  
  function traverseNode(node: TreeNode | null): number {
    if (!node) {
      return Math.max();
    }
    
    const left = traverseNode(node.left);
    if (k === 0) {
      return left;
    }

    k -= 1;
    if (k === 0) {
      return node.val;
    }
    
    const right = traverseNode(node.right);
    if (k === 0) {
      return right;
    }
    
    return Math.max();
  }
};

const root = new TreeNode(
  3,
  new TreeNode(
    1,
    null,
    new TreeNode(2)
  ),
  new TreeNode(4)
);
console.log(`Find the kth smallest element in a BST`, kthSmallest(root, 1));