
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

function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  helper(root, 0);
  return result;
  
  function helper(node: TreeNode, depth: number): void {
    if (node) {      
      if (!result[depth]) {
        result[depth] = [];
      }
      result[depth].push(node.val);
      helper(node.left, depth+1);
      helper(node.right, depth+1);
    }
  }
};

const root = new TreeNode(3,
  new TreeNode(9),
  new TreeNode(20,
    new TreeNode(15),
    new TreeNode(7))
);
console.log('levelOrder', levelOrder(root));