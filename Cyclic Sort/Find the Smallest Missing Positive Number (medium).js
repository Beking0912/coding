/**
 * Given an unsorted array containing numbers, find the smallest missing positive number in it.
 * O(N) O(1)
 *
 * https://leetcode.cn/problems/first-missing-positive/
 * 
 * x 应当出现在数组中的 x−1 的位置，因此交换 nums[i] 和 nums[x−1]
 * 上面的方法可能会陷入死循环。如果 nums[i] 恰好与 nums[x−1] 相等，那么就会无限交换下去。
 * 此时有 nums[i] = x = nums[x−1]，说明 x 已经出现在了正确的位置。
 * 因此可以跳出循环，开始遍历下一个数。
 */
function find_first_smallest_missing_positive(nums) {
  let i = 0;
  while (i < nums.length) {
    const j = nums[i] - 1;
    // 满足在指定范围内、并且没有放在正确的位置上，才交换
    if (nums[i] > 0 && nums[i] <= nums.length && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i++;
    }
  }
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return nums.length + 1;
}
