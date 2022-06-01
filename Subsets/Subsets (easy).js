/**
 * Given a set with distinct elements, find all of its distinct subsets.
 * use the Breadth First Search (BFS) approach
 *
 * O(N∗2^N) O(N∗2^N)
 * 
 * https://leetcode.cn/problems/subsets/
 */
function find_subsets(nums) {
  const subsets = [];
  subsets.push([]);

  for (i = 0; i < nums.length; i++) {
    const n = subsets.length;
    for (j = 0; j < n; j++) {
      const set1 = subsets[j].slice(0);
      set1.push(nums[i]);
      subsets.push(set1);
    }
  }

  return subsets;
}
