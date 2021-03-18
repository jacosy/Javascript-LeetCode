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

function inorderTraversal(root: TreeNode | null): number[] {
  // left --> root --> right 
  const result: number[] = [];
  traverseTreeNode(root);
  return result;
  
  function traverseTreeNode(node: TreeNode | null): void {
    if (node) {
      traverseTreeNode(node.left);
      result.push(node.val);
      traverseTreeNode(node.right);
    }
  }
};

function inorderTraversalIterate(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const result: number[] = [];
  const stack: TreeNode[] = [root];
  let isProcess = false;

  while (stack.length !== 0) {
    const curNode = stack[stack.length - 1];
    console.log('curNode', curNode.val);
    if (curNode.left && !isProcess) {
      stack.push(curNode.left);
      continue;
    }

    result.push(curNode.val);
    stack.pop();
    isProcess = true;

    if (curNode.right) {
      stack.push(curNode.right);
      isProcess = false;
    }
  }

  return result;
};

function inorderTraversalIterate2(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const result: number[] = [];
  const stack: TreeNode[] = [root];
  let goDeep = true;
  // left --> root --> right
  while (stack.length > 0) {
    const curNode = stack[stack.length - 1];
    if (curNode.left && goDeep) {
      stack.push(curNode.left);
      goDeep = true;
      continue;
    }

    result.push(curNode.val);
    stack.pop();
    goDeep = false; 

    if (curNode.right) {
      stack.push(curNode.right);
      goDeep = true; 
    }
  }
  
  return result;
}

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null)));
// const root = new TreeNode(1);
// const root = new TreeNode(1, new TreeNode(2));
// const root = new TreeNode(1, null, new TreeNode(2));
console.log(inorderTraversal(root));