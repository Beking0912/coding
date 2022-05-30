/**
 * https://leetcode.cn/problems/path-sum-ii/
 * 
 * O(N*logN)  O(N)
 */
function count_paths(root, S) {
  return count_paths_recursive(root, S, []);
}

function count_paths_recursive(node, S, path) {
  if (node === null) {
    return 0;
  }

  path.push(node.val);
  let count = 0;
  let pathSum = 0;
  for (let i = path.length - 1; i >= 0; i--) {
    pathSum += path[i];
    if (pathSum === S) {
      count++;
    }
  }
  count += count_paths_recursive(node.left, S, path);
  count += count_paths_recursive(node.right, S, path);

  path.pop();
  return count;
}
