class Node {
  val: number
  children: Node[]
  constructor(val?: number) {
    this.val = (val === undefined ? 0 : val)
    this.children = []
  }
}

function preorder(root: Node | null): number[] {
  const result: number[] = [];
  traverseNode(root);
  return result;
  
  function traverseNode(root: Node | null): void {
    if (root) {
      result.push(root.val);
      for (let node of root.children) {
        traverseNode(node);
      }
    }
  }
};

function preOrderIterative(root: Node | null): number[] {
  if (!root) {
    return [];
  }

  const result: number[] = [];
  const stack: Node[] = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node!.val);
    const childLastIdx = node!.children.length - 1;
    for (let i=childLastIdx; i >=0; i--) {
      stack.push(node!.children[i]);
    }
  }
  return result;
}

const root = new Node(1);
const node1 = new Node(3);
node1.children = [new Node(5), new Node(6)];
root.children = [
  node1,
  new Node(2),
  new Node(4)
];
console.log(`N-ary Tree Preorder Traversal: ${root}`, preorder(root));
console.log(`Iterate N-ary Tree Preorder Traversal: ${root}`, preOrderIterative(root));

export {};