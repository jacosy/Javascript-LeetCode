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

function pathSum_bruteForce(root: TreeNode | null, sum: number): number {  
  if (root) {
    return pathSum_bruteForce(root.left, sum) + pathSum_bruteForce(root.right, sum) + traverseTree(root, 0);
  }
  return 0;
  
  function traverseTree(node: TreeNode | null, curSum: number): number {
    if (node) {
      curSum += node.val;
      return ((curSum === sum ? 1 : 0) +
        traverseTree(node.left, curSum) +
        traverseTree(node.right, curSum));
    }
    return 0;
  }
};

const root = new TreeNode(
  1,
  null,
  new TreeNode(
    2,
    null,
    new TreeNode(
      3,
      null,
      new TreeNode(
        4,
        null,
        new TreeNode(5)
      )
    )
  )
);
console.log('Path_Sum_Brute_Force_Solution', pathSum_bruteForce(root, 3));