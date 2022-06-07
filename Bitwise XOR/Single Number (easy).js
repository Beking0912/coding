/**
 * In a non-empty array of integers, every number appears twice except for one, find that single number.
 * https://leetcode.cn/problems/single-number/
 * O(n) O(1)
 */
function find_single_number(arr) {
  let num = 0;
  for (i = 0; i < arr.length; i++) {
    num ^= arr[i];
  }
  return num;
}
