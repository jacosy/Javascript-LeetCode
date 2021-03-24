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

function maxDepth(root: TreeNode | null): number {
  if (root) {
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
  }
  return 0;
};

const root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(
    20,
    new TreeNode(15),
    new TreeNode(7)
  )
);
console.log('Max Depth:', maxDepth(root));