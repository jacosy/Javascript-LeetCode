import { nodeModuleNameResolver } from "typescript"

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

function postorderTraversal(root: TreeNode | null): number[] {
  // left --> right --> root
  const result: number[] = [];
  traverseTreeNode(root);
  return result;
  
  function traverseTreeNode(node: TreeNode | null): void {
    if (node) {
      traverseTreeNode(node.left);
      traverseTreeNode(node.right);
      result.push(node.val);
    }
  }
};


  // left --> right --> root
function postorderTraversalIterate(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const result: number[] = [];
  const stack: TreeNode[] = [root];
  let preNode = root;

  while (stack.length !== 0) {
    const curNode = stack[stack.length - 1];
    // console.log('curNode', curNode.val);
    let goDeep = false;
    if (curNode.left !== preNode && curNode.right !== preNode) {
      if (curNode.right) {
        stack.push(curNode.right);
        goDeep = true;
      }
      if (curNode.left && curNode.left !== preNode) {
        stack.push(curNode.left);
        goDeep = true;
      }
    }

    if (goDeep) {
      continue;
    }

    result.push(curNode.val);
    preNode = curNode;
    stack.pop();
  }

  return result;
};

// const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
// const root = new TreeNode(1);
// const root = new TreeNode(1, new TreeNode(2));
// const root = new TreeNode(1, null, new TreeNode(2));
// console.log(postorderTraversal(root));
const root = new TreeNode(3, new TreeNode(1), new TreeNode(2));
console.log(postorderTraversalIterate(root));