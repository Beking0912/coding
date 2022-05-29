/**
 * Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf
 * such that the sum of all the node values of that path equals ‘S’.
 * 
 * https://leetcode.cn/problems/path-sum/
 */
function hasPath(root, sum) {
  if (root === null) {
    return false;
  }

  if (root.val === sum && root.left === null && root.right === null) {
    return true;
  }

  return hasPath(root.left, sum - root.val) || hasPath(root.right, sum - root.val)
}
