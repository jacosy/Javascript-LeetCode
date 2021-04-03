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


function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const len = preorder.length;  
  // inorder: left => root => right;
  // preorder: root => left => right;
  const inorderMap: Map<number, number> =
    inorder.reduce((map, val, idx) => {
    map.set(val, idx);
    return map;
  }, new Map<number, number>());
  let preIdx = 0;
  return buildNode(0, len-1);
  
  function buildNode(sInIdx: number, eInIdx: number): TreeNode | null {
    if (preIdx < len) {
      const rootIdx: number = inorderMap.get(preorder[preIdx]);
      if (rootIdx >= sInIdx && rootIdx <= eInIdx) {
        const node = new TreeNode(inorder[rootIdx]);
        preIdx += 1;
        node.left = buildNode(sInIdx, rootIdx-1);
        node.right = buildNode(rootIdx+1, eInIdx);
        return node;
      }
      return null;
    }
    return null;
  }
};

const preorder: number[] = [3,9,20,15,7];
const inorder: number[] = [9,3,15,20,7];
console.log('buildTree', buildTree(preorder, inorder));