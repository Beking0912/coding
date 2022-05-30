/**
 * Find the path with the maximum sum in a given binary tree.
 * Write a function that returns the maximum sum.
 */
const maxPathSum = (root) => {
  let max = 0;
  const dfs = (root) => {
    if (root === null) return 0;
    const left = dfs(root.left);
    const right = dfs(root.right);
    const innerMaxSum = left + root.val + right; // 当前子树内部的最大路径和

    max = Math.max(max, innerMaxSum);
    const outputMaxSum = root.val + Math.max(0, left, right); // 当前子树对外提供的最大和

    // 如果对外提供的路径和为负，直接返回0。否则正常返回
    return outputMaxSum < 0 ? 0 : outputMaxSum;
  };
  dfs(root);
  return max;
};
