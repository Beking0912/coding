/**
 * Given an array of numbers which is sorted in ascending order and also rotated by some arbitrary number,
 * find if a given ‘key’ is present in it.
 *
 * O(logN) O(1)
 *
 * https://leetcode.cn/problems/search-in-rotated-sorted-array/
 * 将数组一分为二，其中一定有一个是有序的，另一个可能是有序，也能是部分有序。
 * 此时有序部分用二分法查找。
 * 无序部分再一分为二，其中一个一定有序，另一个可能有序，可能无序。就这样循环.
 */
function search_rotated_array(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === key) {
      return mid;
    }

    if (arr[start] <= arr[mid]) {
      // left side is sorted in ascending order
      if (key >= arr[start] && key < arr[mid]) {
        // [ start=4, key=5, mid=6, 7, end=8 ]
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      // right side is sorted in ascending order
      if (key > arr[mid] && key <= arr[end]) {
        // [ start=4, 5, mid=6, key=7, end=8 ]
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
}

/**
 * search in a sorted and rotated array that also has duplicates
 * 
 * the only difference from the previous solution,
 * if numbers at indexes start, mid, and end are same, we can't choose a side
 * the best we can do, is to skip one number from both ends as key !== arr[mid]
 */
function search_rotated_with_duplicates(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === key) {
      return mid;
    }

    // skip one number from both ends
    if (arr[start] === arr[mid] && arr[end] === arr[mid]) {
      start += 1;
      end -= 1;
    } else if (arr[start] <= arr[mid]) { // left side is sorted in ascending order
      if (key >= arr[start] && key < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else { // right side is sorted in ascending order
      if (key > arr[mid] && key <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
}
