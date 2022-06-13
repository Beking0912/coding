/**
 * Given an array of unsorted numbers,
 * find all unique triplets in it that add up to zero.
 *
 * Time O(N^2)  Space O(N)
 *
 * 先固定第一个数a，然后b、c只能从两边向中间靠（在a之后）。细节条件就是去重处理
 * https://leetcode.cn/problems/3sum/solution/three-sum-giftu-jie-by-githber/
 */
function search_triplets(arr) {
  arr.sort((a, b) => a - b);
  const triplets = [];
  for (i = 0; i < arr.length; i++) {
    // 需要和上一次枚举的数不相同
    if (i > 0 && arr[i] === arr[i - 1]) {
      // skip same element to avoid duplicate triplets
      continue;
    }
    search_pair(arr, -arr[i], i + 1, triplets);
  }
  return triplets;
}

function search_pair(arr, target_sum, left, triplets) {
  let right = arr.length - 1;
  while (left < right) {
    const current_sum = arr[left] + arr[right];
    if (current_sum === target_sum) {
      // found the triplet
      triplets.push([-target_sum, arr[left], arr[right]]);
      left++;
      right--;

      // 跳过重复值
      while (left < right && arr[left] === arr[left - 1]) {
        left++;
      }
      while (left < right && arr[right] === arr[right + 1]) {
        right--;
      }
    } else if (target_sum > current_sum) {
      left++; // we need a pair with a bigger sum
    } else {
      right--; // we need a pair with a smaller sum
    }
  }
}

// s2
var threeSum = function (A) {
  const nums = A.sort((a, b) => a - b);
  const res = [];
  for (i in nums) {
    const current = nums[i];
    if (current > 0) break;
    if (current == nums[i - 1]) continue;

    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      const total = current + nums[l] + nums[r];
      if (total > 0) {
        r--;
      } else if (total < 0) {
        l++;
      } else {
        res.push([current, nums[l], nums[r]]);
        l++;
        while (l < r && nums[l - 1] == nums[l]) {
          l++;
        }
      }
    }
  }
  return res;
};
