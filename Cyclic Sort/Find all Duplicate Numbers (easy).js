/**
 * 数组中重复的所有数据
 * O(N) O(1)
 *
 * https://leetcode.cn/problems/find-all-duplicates-in-an-array/
 */
function find_all_duplicates(nums) {
  let i = 0;
  while (i < nums.length) {
    const j = nums[i] - 1;
    if (nums[i] != nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i++;
    }
  }

  duplicateNumbers = [];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      duplicateNumbers.push(nums[i]);
    }
  }
  return duplicateNumbers;
}
