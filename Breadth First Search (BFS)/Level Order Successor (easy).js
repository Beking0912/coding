/**
 * Given a binary tree and a node, find the level order successor of the given node in the tree.
 * The level order successor is the node that appears right
 * after the given node in the level order traversal.
 * 
 * O(N)  O(N)
 */

function find_successor(root, key) {
  if (root === null) {
    return null;
  }

  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.right !== null) {
      queue.push(current.right);
    }
    if (current.val === key) {
      break;
    }
  }

  if (queue.length > 0) {
    return queue.peek();
  }
  return null;
}
