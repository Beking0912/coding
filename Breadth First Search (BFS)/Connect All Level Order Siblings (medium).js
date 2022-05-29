/**
 * 二叉树展开为链表
 *
 * Given a binary tree, connect each node with its level order successor.
 * The last node of each level should point to the first node of the next level.
 * O(N) O(N)
 *
 * https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/
 */

function connect_all_siblings(root) {
  if (root === null) {
    return;
  }

  const queue = [];
  queue.push(root);
  let current = null;
  const previousNode = null;
  while (queue.length > 0) {
    //
    //
    current = queue.shift();
    if (previousNode !== null) {
      previousNode.next = current;
    }
    previousNode = current;
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
