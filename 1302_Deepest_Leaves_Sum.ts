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


function deepestLeavesSum(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const result = traverseTree(root, 1);
  return result[1];

  function traverseTree(node: TreeNode | null, depth: number): [number, number] | null {
    if (!node) {
      return null
    }

    const lResult = traverseTree(node.left, depth + 1);
    const rResult = traverseTree(node.right, depth + 1);

    if (lResult && rResult) {
      const lDepth = lResult[0];
      const rDepth = rResult[0];
      if (lDepth === rDepth) {
        return [lDepth, lResult[1] + rResult[1]];
      } else if (lDepth > rDepth) {
        return lResult;
      } else if (lDepth < rDepth) {
        return rResult;
      }
    } else if (lResult) {
      return lResult;
    } else if (rResult) {
      return rResult;
    }

    return [depth, node.val];
  }
};


const root = new TreeNode(
  1,
  new TreeNode(
    2,
    new TreeNode(
      4,
      new TreeNode(7)
    ),
    new TreeNode(5)
  ),
  new TreeNode(
    3,
    null,
    new TreeNode(
      6,
      null,
      new TreeNode(8)
    )
  )
);

console.log(`Return the sum of the values of its deepest leaves of the binary tree: [1,2,3,4,5,null,6,7,null,null,null,null,8]. Ans:`, deepestLeavesSum(root));