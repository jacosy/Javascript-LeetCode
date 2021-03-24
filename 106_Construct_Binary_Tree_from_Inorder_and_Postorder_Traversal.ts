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

function buildTreeSlow(inorder: number[], postorder: number[]): TreeNode | null {
  if (inorder.length === 0 || postorder.length === 0) {
    return null;
  }
  
  const len = postorder.length;
  const poNodeVal = postorder[len - 1];
  const node = new TreeNode(poNodeVal);
  
  const ioNodeIdx = inorder.findIndex(n => n === poNodeVal);  
  if (ioNodeIdx > -1) {
    node.left = buildTree(
      inorder.slice(0, ioNodeIdx),
      postorder.slice(0, ioNodeIdx)
    );
  }
  if (ioNodeIdx < len) {
    node.right = buildTree(
      inorder.slice(ioNodeIdx + 1),      
      postorder.slice(ioNodeIdx, len - 1)
    );
  }
  
  return node;
};

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  const len: number = inorder.length - 1;  
  let posIdx: number = len;

  return buildNode(0, len);
  
  function buildNode(leftBound: number, rightBound: number): TreeNode | null {
    if (posIdx < 0) {
      return null;
    }

    const poNodeVal = postorder[posIdx];
    const ioRootIdx = inorder.findIndex(n => n === poNodeVal);
    if (ioRootIdx >= leftBound && ioRootIdx <= rightBound) {
      posIdx -= 1;
      const node = new TreeNode(poNodeVal);
      node.right = buildNode(ioRootIdx + 1, rightBound);
      node.left = buildNode(leftBound, ioRootIdx - 1);
      return node; 
    }
    
    return null;
  }
};

const inorder: number[] = [9,3,15,20,7];
const postorder: number[] = [9,15,7,20,3];
console.log('Construct Binary Tree from Inorder and Postorder Traversal', buildTree(inorder, postorder));