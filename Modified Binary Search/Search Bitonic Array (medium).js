/**
 * Given a Bitonic array, find if a given ‘key’ is present in it.
 *
 * 1. find the index of the maximum value
 * 2. break the array into two sub-arrays:
 *    [index ‘0’ to maxIndex, sorted in ascending order]
 *    [index maxIndex+1 to array_length-1, sorted in descending order]
 * 3. call Binary Search separately in these two arrays to search the ‘key’
 */
function search_bitonic_array(arr, key) {
  const maxIndex = find_max(arr);
  const keyIndex = binary_search(arr, key, 0, maxIndex);
  if (keyIndex !== -1) {
    return keyIndex;
  }
  return binary_search(arr, key, maxIndex + 1, arr.length - 1);
}

// find index of the maximum value in a bitonic array
function find_max(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] > arr[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
}

// order-agnostic binary search
function binary_search(arr, key, start, end) {
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (key === arr[mid]) {
      return mid;
    }

    if (arr[start] < arr[end]) { // ascending order
      if (key < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else { // descending order
      if (key > arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return -1; // element is not found
}
