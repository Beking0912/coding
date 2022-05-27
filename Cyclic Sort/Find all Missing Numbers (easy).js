/**
 * 找出所有在 [1, n] 范围内但没有出现在 nums 中的数字
 * O(N) O(1)
 *
 * https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/solution/zhao-dao-suo-you-shu-zu-zhong-xiao-shi-d-mabl/
 */
function find_missing_numbers(nums) {
  let i = 0;
  while (i < nums.length) {
    const j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i++;
    }
  }

  missingNumbers = [];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      missingNumbers.push(i + 1);
    }
  }
  return missingNumbers;
}
