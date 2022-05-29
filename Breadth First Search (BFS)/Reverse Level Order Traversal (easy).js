/**
 * Given a binary tree, populate an array to represent its level-by-level traversal in reverse order,
 * i.e., the lowest level comes first.
 * You should populate the values of all nodes in each level from left to right in separate sub-arrays.
 *
 * https://leetcode.cn/problems/binary-tree-level-order-traversal-ii/
 */
function traverse(root) {
  const result = [];
  if (root === null) {
    return result;
  }

  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    const level = [];
    const len = queue.length; 
    for (i = 0; i < len; i++) {
      const current = queue.shift();
      level.push(current.value);
      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }
    result.unshift(level); // diff
  }
  return result;
}
