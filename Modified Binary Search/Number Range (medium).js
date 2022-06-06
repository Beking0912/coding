/**
 * Given an array of numbers sorted in ascending order, find the range of a given number ‘key’.
 * The range of the ‘key’ will be the first and last position of the ‘key’ in the array.
 *
 * if the ‘key’ is found (i.e. key == arr[middle]) we have two options:
 * 1. When trying to find the first position of the ‘key’, we can update end = middle - 1
 *    to see if the key is present before middle.
 * 2. When trying to find the last position of the ‘key’, we can update start = middle + 1
 *    to see if the key is present after middle.
 *
 * O(logN)  O(1)
 */
function find_range(arr, key) {
  const result = [-1, -1];
  result[0] = binary_search(arr, key, false);
  if (result[0] !== -1) {
    result[1] = binary_search(arr, key, true);
  }
  return result;
}

// modified Binary Search
function binary_search(arr, key, findMaxIndex) {
  let keyIndex = -1;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (key < arr[mid]) {
      end = mid - 1;
    } else if (key > arr[mid]) {
      start = mid + 1;
    } else {
      //
      //
      keyIndex = mid;
      if (findMaxIndex) {
        start = mid + 1; // 右边界
      } else {
        end = mid - 1; // 左边界
      }
      //
      //
    }
  }

  return keyIndex;
}
