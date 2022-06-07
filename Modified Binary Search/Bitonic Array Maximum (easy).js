/**
 * Find the maximum value in a given Bitonic array.
 * An array is considered bitonic if it is monotonically increasing and then monotonically decreasing.
 * Monotonically increasing or decreasing means that for any index i in the array arr[i] != arr[i+1].
 */
function find_max_in_bitonic_array(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] > arr[mid + 1]) { // mid是降序的转折点
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  // at the end of the while loop, 'start === end'
  return arr[start];
}
