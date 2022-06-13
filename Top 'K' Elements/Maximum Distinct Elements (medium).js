/**
 * Given an array of numbers and a number ‘K’,
 * we need to remove ‘K’ numbers from the array such that we are left with maximum distinct numbers.
 *
 * https://leetcode.cn/problems/least-number-of-unique-integers-after-k-removals/
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  let count = 0;
  if (arr.length <= k) return count;

  const map = {};
  for (const n of arr) {
    map[n] = (map[n] || 0) + 1;
  }

  const values = Object.values(map).sort((a, b) => a - b);

  let length = values.length;
  for (let i = 0; i < values.length; i++) {
    const frequency = values[i];
    k -= frequency;
    if (k >= 0) length--;
    else break;
  }
  return length;
};
