/**
 * 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。
 * [4, 0, 3, 1] => 2
 *
 * https://leetcode.cn/problems/missing-number/solution/diu-shi-de-shu-zi-by-leetcode-solution-naow/
 */

// 1. 排序 O(N*logN) O(logN)
var missingNumber1 = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
  return n;
};

// 2. 哈希集合 O(N) O(N)
var missingNumber2 = function (nums) {
  const set = new Set();
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    set.add(nums[i]);
  }
  let missing = -1;
  for (let i = 0; i <= n; i++) {
    if (!set.has(i)) {
      missing = i;
      break;
    }
  }
  return missing;
};

// 3. 位运算 O(N) O(1)
var missingNumber3 = function (nums) {
  let xor = 0;
  const n = nums.length;
  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
  }
  for (let i = 0; i <= n; i++) {
    xor ^= i;
  }
  return xor;
};

// 4. 数学 O(N) O(1)
var missingNumber4 = function (nums) {
  const n = nums.length;
  let total = Math.floor((n * (n + 1)) / 2); // (首项+尾项)*项数/2
  let arrSum = 0;
  for (let i = 0; i < n; i++) {
    arrSum += nums[i];
  }
  return total - arrSum;
};
