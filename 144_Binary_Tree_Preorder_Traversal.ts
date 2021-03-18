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
    if (node) {
      result.push(node.val);
      traverseTreeNode(node.left);
      traverseTreeNode(node.right);
    }
  }
};


function preorderTraversalIterate(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const result: number[] = [];
  const stack: TreeNode[] = [root];
  
  while (stack.length > 0) {
    // root --> left --> right
    const curNode = stack[stack.length - 1];
    console.log('curNode', curNode)
    result.push(curNode.val);
    stack.pop();
    
    if (curNode.right) {
      stack.push(curNode.right);
    }

    if (curNode.left) {
      stack.push(curNode.left);
    }
  }
  
  return result;
};

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null)));
// const root = new TreeNode(1);
// const root = new TreeNode(1, new TreeNode(2));
// const root = new TreeNode(1, null, new TreeNode(2));
// console.log(preorderTraversal(root));
console.log(preorderTraversalIterate(root));