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


function pruneTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);
  return root.left || root.right || root.val === 1 ? root : null;
};

const root = new TreeNode(
  1,
  new TreeNode(
    1,
    new TreeNode(
      1,
      new TreeNode(0)
    ),
    new TreeNode(1)
  ),
  new TreeNode(
    0,
    new TreeNode(0),
    new TreeNode(1)
  )
);

console.log('Binary Tree Pruning', pruneTree(root));