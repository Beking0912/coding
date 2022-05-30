/**
 * https://leetcode.cn/problems/diameter-of-binary-tree/
 *
 * O(N) O(N)
 */

class TreeDiameter {
  constructor() {
    this.treeDiameter = 0;
  }

  calculate_height(currentNode) {
    if (currentNode === null) {
      return 0;
    }

    const leftTreeHeight = this.calculate_height(currentNode.left);
    const rightTreeHeight = this.calculate_height(currentNode.right);

    if (leftTreeHeight !== 0 && rightTreeHeight !== 0) {
      const diameter = leftTreeHeight + rightTreeHeight + 1;
      this.treeDiameter = Math.max(this.treeDiameter, diameter);
    }
    return Math.max(leftTreeHeight, rightTreeHeight) + 1;
  }
}

// 利用后序遍历优化后的实现方式
const diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;

  const calculate_height = (root) => {
    if (root == null) return 0;
    const leftMax = calculate_height(node.left);
    const rightMax = calculate_height(node.right);
    maxDiameter = Math.max(maxDiameter, leftMax + rightMax);
    return Math.max(leftMax, rightMax) + 1;
  };

  calculate_height(root);
  return maxDiameter;
};
