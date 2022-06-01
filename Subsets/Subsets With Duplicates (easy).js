/**
 * Given a set of numbers that might contain duplicates, find all of its distinct subsets.
 * O(N∗2^N) O(N∗2^N)
 * 
 * https://leetcode.cn/problems/subsets-ii/
 * 
 * Follow the same BFS approach, instead of adding the current number (which is a duplicate) 
 * to all the existing subsets, only add it to the subsets which were created in the previous step.
 */
function find_subsets(nums) {
  nums.sort((a, b) => a - b); // to ensure all duplicate numbers are next to each other
  const subsets = [];
  subsets.push([]);

  let startIndex = 0, endIndex = 0;
  for (i = 0; i < nums.length; i++) {
    // 
    startIndex = 0;
    if (i > 0 && nums[i] === nums[i - 1]) {
      startIndex = endIndex + 1;
    }
    // [startIndex, endIndex]
    endIndex = subsets.length - 1;
    for (j = startIndex; j < endIndex + 1; j++) {
      const set1 = subsets[j].slice(0);
      set1.push(nums[i]);
      subsets.push(set1);
    }
  }
  return subsets;
}
