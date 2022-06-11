/**
 * Given a number ‘n’, write a function to return all structurally unique Binary Search Trees (BST)
 * that can store values 1 to ‘n’?
 *
 * https://leetcode.cn/problems/unique-binary-search-trees-ii/
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

// 2
var generateTrees = function (n) {
  if (n == 0) return [];
  let memo = new Map(); // 备忘录，避免重复计算

  /* 构造闭区间 [lo, hi] 组成的 BST */
  const build = (lo, hi) => {
    let res = [];
    // base case，显然当lo > hi闭区间[lo, hi]肯定是个空区间，也就对应着空节点 null，
    if (lo > hi) {
      res.push(null);
      return res;
    }
    let memoKey = `${lo}&${hi}`;
    if (memo.has(memoKey)) return memo.get(memoKey); // 如果缓存当中有就直接拿
    // 1、穷举 root 节点的所有可能。
    for (let i = lo; i <= hi; i++) {
      // 2、递归构造出左右子树的所有合法 BST。
      let leftTree = build(lo, i - 1);
      let rightTree = build(i + 1, hi);
      // 3、给 root 节点穷举所有左右子树的组合。
      for (let left of leftTree) {
        for (let right of rightTree) {
          res.push(new TreeNode(i, left, right));
        }
      }
    }
    memo.set(memoKey, res); // 将结果集放入到缓存中
    return res;
  };
  return build(1, n); // 构造闭区间 [1, n] 组成的 BST
};
