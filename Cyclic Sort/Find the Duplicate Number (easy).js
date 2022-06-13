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

// 2
function find_duplicate(nums) {
  let left = 1;
  let right = nums.length;
  while (left < right) {
    let mid = (right - left) / 2 + left;
    let count = 0;
    for (let num of nums) {
      if (num <= m) ++count;
    }

    if (count <= m) left = mid + 1;
    else right = mid;
  }
  return 1;
}

// 3
function find_duplicate(nums) {
  let slow = 0;
  let fast = 0;
  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow === fast) break;
  }
  fast = 0;
  while (fast !== slow) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
}
