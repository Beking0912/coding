/**
 * Given an array of numbers sorted in an ascending order, find the ceiling of a given number ‘key’.
 *
 * O(logN) O(1)
 */
function search_ceiling_of_a_number(arr, key) {
  if (key > arr[arr.length - 1]) {
    return -1;
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
      return mid;
    }
  }
  return start;
}

/**
 * Given an array of numbers sorted in ascending order, find the floor of a given number ‘key’.
 * The floor of the ‘key’ will be the biggest element in the given array smaller than or equal to the ‘key’
 */
function search_floor_of_a_number(arr, key) {
  if (key < arr[0]) {
    return -1;
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
      return mid;
    }
  }
  return end;
}
