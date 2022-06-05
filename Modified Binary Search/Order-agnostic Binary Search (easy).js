/**
 * Given a sorted array of numbers, find if a given number ‘key’ is present in the array.
 * 
 * O(logN)  O(1)
 */
function binary_search(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  const isAscending = arr[start] < arr[end]; // 因为给定的是有序数组
  while (start <= end) {
    const midIndex = Math.floor(start + (end - start) / 2);

    if (key === arr[midIndex]) {
      return midIndex;
    }
    if (isAscending) {
      if (key < arr[midIndex]) {
        end = midIndex - 1;
      } else {
        start = midIndex + 1;
      }
    } else {
      if (key > arr[midIndex]) {
        end = midIndex - 1;
      } else {
        start = midIndex + 1; 
      }
    }
  }

  return -1;
}
