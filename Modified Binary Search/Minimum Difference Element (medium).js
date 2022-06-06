/**
 * Given an array of numbers sorted in ascending order, find the element in the array that has the minimum difference with the given ‘key’.
 * 
 * O(logN)  O(1)
 */
function search_min_diff_element(arr, key) {
  if (key < arr[0]) {
    return arr[0];
  }
  if (key > arr[arr.length - 1]) {
    return arr[arr.length - 1];
  }

  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (key < arr[mid]) {
      end = mid - 1;
    } else if (key > arr[mid]) {
      start = mid + 1;
    } else {
      return arr[mid];
    }
  }

  // at the end of the while loop, 'start === end+1'
  // we are not able to find the element in the given array
  // return the element which is closest to the 'key'
  if (arr[start] - key < key - arr[end]) {
    return arr[start];
  }
  return arr[end];
}
