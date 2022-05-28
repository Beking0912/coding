/**
 * 数组中重复的数据
 * Find that duplicate number without using any extra space.
 * O(N) O(1)
 * 
 * https://leetcode.cn/problems/find-the-duplicate-number/
 */
function find_duplicate(nums) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] !== i + 1) {
      const j = nums[i] - 1;
      if (nums[i] !== nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
      } else {
        return nums[i];
      }
    } else {
      i++;
    }
  }
  return -1;
}
