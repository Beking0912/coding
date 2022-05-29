/**
 * 二叉树层序遍历
 * O(N) O(N)
 *
 * https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/
 */

function traverse(root) {
  result = [];
  if (root === null) {
    return result;
  }

  const queue = [];
  queue.push(root);
  let leftToRight = true;
  while (queue.length > 0) {
    const len = queue.length;
    const level = [];
    for (i = 0; i < len; i++) {
      current = queue.shift();

      if (leftToRight) {
        level.push(current.val);
      } else {
        level.unshift(current.val);
      }

      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }
    result.push(level.toArray());
    leftToRight = !leftToRight;
  }
  return result;
}
