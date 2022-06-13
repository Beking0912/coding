/**
 * Given a number ‘n’, write a function to return the count of structurally unique Binary Search Trees (BST)
 * that can store values 1 to ‘n’.
 *
 * iterate from 1 to ‘n’ and consider each number as the root of a tree
 * and make two recursive calls to count the number of left and right sub-trees.
 *
 * https://leetcode.cn/problems/unique-binary-search-trees/submissions/
 */
var numTrees = function (n) {
  if (n <= 1) {
    return 1;
  }
  let count = 0;
  for (let i = 1; i < n + 1; i++) {
    const left = numTrees(i - 1);
    const right = numTrees(n - i);
    count += left * right;
  }
  return count;
};

// s2
// O(n^2)  O(n)
function numTrees(n) {
  return countTrees({}, n);
}

function countTrees(map, n) {
  if (n in map) {
    return map[n];
  }

  if (n <= 1) {
    return 1;
  }
  let count = 0;
  for (let i = 1; i < n + 1; i++) {
    const left = countTrees(map, i - 1);
    const right = countTrees(map, n - i);
    count += left * right;
  }

  map[n] = count;
  return count;
}
