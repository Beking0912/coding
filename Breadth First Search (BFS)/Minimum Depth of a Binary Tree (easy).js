/**
 * Find the minimum depth of a binary tree.
 * The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.
 */

function find_minimum_depth(root) {
  if (root === null) {
    return 0;
  }

  const queue = [];
  queue.push(root);
  let minimumTreeDepth = 0;
  while (queue.length > 0) {
    minimumTreeDepth += 1;
    const len = queue.length;
    for (i = 0; i < len; i++) {
      const current = queue.shift();
      if (current.left === null && current.right === null) {
        return minimumTreeDepth;
      }
      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }
  }
}

/**
 * Given a binary tree, find its maximum depth (or height)
 * https://leetcode.cn/problems/maximum-depth-of-binary-tree/submissions/
 */
function find_maximum_depth(root) {
  if (root === null) {
    return 0;
  }

  const queue = [];
  queue.push(root);
  let max = 0;
  while (queue.length > 0) {
    max++;
    const len = queue.length;
    for (i = 0; i < len; i++) {
      const current = queue.shift();
      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }
  }
  return max;
}
