/**
 * Given a binary tree where each node can only have a digit (0-9) value,
 * each root-to-leaf path will represent a number.
 * Find the total sum of all the numbers represented by all paths.
 * 
 * O(N)  O(N)
 */
function find_sum_of_path_numbers(root) {
  return find_root_to_leaf_path_numbers(root, 0);
}

function find_root_to_leaf_path_numbers(currentNode, pathSum) {
  if (currentNode === null) {
    return 0;
  }

  pathSum = 10 * pathSum + currentNode.val;

  if (currentNode.left === null && currentNode.right === null) {
    return pathSum;
  }

  return find_root_to_leaf_path_numbers(currentNode.left, pathSum) +
    find_root_to_leaf_path_numbers(currentNode.right, pathSum);
}
