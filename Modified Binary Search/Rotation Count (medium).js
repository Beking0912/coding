/**
 * Given an array of numbers which is sorted in ascending order and is rotated ‘k’ times around a pivot, find ‘k’.
 *
 * find the index of the minimum element
 * The number of times the minimum element is moved to the right will be equal to the number of rotations.
 *
 * O(logN) O(1)
 */
function count_rotations(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);

    // if mid is greater than the next element
    if (mid < end && arr[mid] > arr[mid + 1]) {
      return mid + 1;
    }

    // if mid is smaller than the previous element
    if (mid > start && arr[mid - 1] > arr[mid]) {
      return mid;
    }

    if (arr[start] < arr[mid]) {
      // left side is sorted, so the pivot is on right side
      start = mid + 1;
    } else {
      // right side is sorted, so the pivot is on the left side
      end = mid - 1;
    }
  }
  return 0; // the array has not been rotated
}

/**
 * find the rotation count of a sorted and rotated array that has duplicates
 *
 * The only difference is that before incrementing start or decrementing end,
 * we will check if either of them is the smallest number.
 * 
 * O(N) O(1)
 */
function count_rotations_with_duplicates(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (mid < end && arr[mid] > arr[mid + 1]) {
      return mid + 1;
    }
    if (mid > start && arr[mid - 1] > arr[mid]) {
      return mid;
    }

    // skip one number from both ends if they are not the smallest number
    if (arr[start] === arr[mid] && arr[end] === arr[mid]) {
      if (arr[start] > arr[start + 1]) {
        // if element at start+1 is not the smallest
        return start + 1;
      }
      start++;
      if (arr[end - 1] > arr[end]) {
        // if the element at end is not the smallest
        return end;
      }
      end--;
    } // left side is sorted, so the pivot is on right side
    else if (arr[start] < arr[mid] || (arr[start] == arr[mid] && arr[mid] > arr[end])) {
      start = mid + 1;
    } else {
      // right side is sorted, so the pivot is on the left side
      end = mid - 1;
    }
  }

  return 0; // the array has not been rotated
}
