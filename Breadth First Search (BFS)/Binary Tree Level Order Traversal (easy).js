/**
 * Given a binary tree, populate an array to represent its level-by-level traversal.
 * You should populate the values of all nodes of each level from left to right in separate sub-arrays.
 * O(N) O(N)
 * 
 * https://leetcode.cn/problems/binary-tree-level-order-traversal/solution/bfs-de-shi-yong-chang-jing-zong-jie-ceng-xu-bian-l/
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
    const len = queue.length; // 这里一定要使用固定大小，因为length是不断变化的
    for (i = 0; i < len; i++) {
      const current = queue.shift();
      level.push(current.val);
      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }
    result.push(level);
  }
  return result;
}
