/**
 * Given a number ‘n’, write a function to return all structurally unique Binary Search Trees (BST)
 * that can store values 1 to ‘n’?
 */
function find_unique_trees(n) {
  if (n <= 0) {
    return [];
  }
  return findUnique_trees_recursive(1, n);
}

function findUnique_trees_recursive(start, end) {
  const result = [];
  if (start > end) {
    result.push(null);
    return result;
  }

  for (let i = start; i < end + 1; i++) {
    const leftSubtrees = findUnique_trees_recursive(start, i - 1);
    const rightSubtrees = findUnique_trees_recursive(i + 1, end);
    for (let p = 0; p < leftSubtrees.length; p++) {
      for (let q = 0; q < rightSubtrees.length; q++) {
        const root = new TreeNode(i, leftSubtrees[p], rightSubtrees[q]);
        result.push(root);
      }
    }
  }

  return result;
}
