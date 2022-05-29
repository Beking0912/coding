/**
 * Given a binary tree, return an array containing nodes in its right view.
 * The right view of a binary tree is the set of nodes visible when the tree is seen from the right side.
 *
 * O(N) O(N)
 * 
 * https://leetcode.cn/problems/binary-tree-right-side-view/
 */
function tree_right_view(root) {
  const result = [];
  if (root === null) {
    return result;
  }

  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    const len = queue.length;
    for (i = 0; i < len; i++) {
      const current = queue.shift();
      //
      //
      if (i === len - 1) {
        result.push(current);
      }
      //
      //
      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }
  }
  return result;
}
