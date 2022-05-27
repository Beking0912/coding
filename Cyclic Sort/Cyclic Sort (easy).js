/**
 * 遍历所有数字并将它们放在正确的索引处
 * [3, 1, 5, 4, 2] => [1, 2, 3, 4, 5]
 * 
 * O(n)  O(1)
 */
function cyclic_sort(nums) {
  let i = 0;
  while (i < nums.length) {
    const j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i += 1;
    }
  }
  return nums; 
}
