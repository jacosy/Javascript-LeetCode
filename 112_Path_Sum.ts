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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }
  return helper(root, 0);
  
  function helper(node: TreeNode, sum: number): boolean {
    if (node.left && node.right) {
      return helper(node.left, sum + node.val) || helper(node.right, sum + node.val);
    } else if (node.left) {
      return helper(node.left, sum + node.val);
    } else if (node.right) {
      return helper(node.right, sum + node.val);
    }
    return sum + node.val === targetSum; 
  }
};

const targetSum: number = 4;
const root = new TreeNode(
  1,
  new TreeNode(2),
  new TreeNode(3)
);
console.log(`Path Sum ${targetSum}:`, hasPathSum(root, targetSum));