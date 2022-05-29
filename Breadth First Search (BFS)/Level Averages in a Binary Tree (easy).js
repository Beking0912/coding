/**
 * 二叉树的层平均值
 * O(N) O(N)
 * https://leetcode.cn/problems/average-of-levels-in-binary-tree/
 *
 * Given a binary tree, populate an array to represent the averages of all of its levels.
 */

function find_level_averages(root) {
  const result = [];
  if (root === null) {
    return result;
  }

  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let levelSize = queue.length;
    let levelSum = 0.0;
    for (i = 0; i < levelSize; i++) {
      currentNode = queue.shift();
      levelSum += currentNode.val;
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.push(levelSum / levelSize);
  }
  return result;
}
