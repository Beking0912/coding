/**
 * Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that
 * the sum of all the node values of each path equals ‘S’.
 *
 * 1. Every time we find a root-to-leaf path, we will store it in a list.
 * 2. We will traverse all paths and will not stop processing after finding the first path.
 * 
 *  O(N*logN) O(N∗logN)
 */
function find_paths(root, sum) {
  const allPaths = [];
  find_paths_recursive(root, sum, [], allPaths);
  return allPaths;
}

function find_paths_recursive(currentNode, sum, currentPath, allPaths) {
  if (currentNode === null) {
    return;
  }

  currentPath.push(currentNode.val);

  if (currentNode.val === sum && currentNode.left === null && currentNode.right === null) {
    allPaths.push(currentPath);
  } else {
    find_paths_recursive(currentNode.left, sum - currentNode.val, currentPath, allPaths);
    find_paths_recursive(currentNode.right, sum - currentNode.val, currentPath, allPaths);
  }
  currentPath.pop();
}
