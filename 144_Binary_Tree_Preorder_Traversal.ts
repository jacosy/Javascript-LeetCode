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

function preorderTraversal(root: TreeNode | null): number[] {
  // root --> left --> right
  const result: number[] = [];
  traverseTreeNode(root);
  return result;
  
  function traverseTreeNode(node: TreeNode | null): void {
    if (node!) {
      result.push(node!.val);
      traverseTreeNode(node!.left);
      traverseTreeNode(node!.right);
    }
  }
};


function preorderTraversalIterate(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const ans: number[] = [];
  const stack: TreeNode[] = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    ans.push(node!.val);
    node!.right && stack.push(node!.right);
    node!.left && stack.push(node!.left);
  }
  return ans;
};

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null)));
// const root = new TreeNode(1);
// const root = new TreeNode(1, new TreeNode(2));
// const root = new TreeNode(1, null, new TreeNode(2));
console.log(`Recursive Preorder Traversal`, preorderTraversal(root));
console.log(`Iterative Preorder Traversal`, preorderTraversalIterate(root));

export {};