/**
 * Given a binary tree, connect each node with its level order successor.
 * The last node of each level should point to a null node.
 */
function connect_level_order_siblings(root) {
  if (root === null) {
    return;
  }

  const queue = new Deque();
  queue.push(root);
  while (queue.length > 0) {
    let previousNode = null;
    const len = queue.length;
    for (i = 0; i < len; i++) {
      const current = queue.shift();
      //
      //
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
}
