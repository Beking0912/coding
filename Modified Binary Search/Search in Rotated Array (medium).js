/**
 * Given an array of numbers which is sorted in ascending order and also rotated by some arbitrary number,
 * find if a given ‘key’ is present in it.
 * 
 * https://leetcode.cn/problems/search-in-rotated-sorted-array/
 */
function search_rotated_array(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === key) {
      return mid;
    }

    if (arr[start] <= arr[mid]) { // left side is sorted in ascending order
      if (key >= arr[start] && key < arr[mid]) { // [ start=4, key=5, mid=6, 7, end=8 ]
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else { // right side is sorted in ascending order
      if (key > arr[mid] && key <= arr[end]) { // [ start=4, 5, mid=6, key=7, end=8 ]
        start = mid + 1;
      } else { 
        end = mid - 1;
      }
    }
  }
  return -1;
}
