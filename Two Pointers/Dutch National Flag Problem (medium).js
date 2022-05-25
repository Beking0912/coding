/**
 * Given an array containing 0s, 1s and 2s, sort the array in-place.
 * You should treat numbers of the array as objects, hence,
 * we can’t count 0s, 1s, and 2s to recreate the array.
 * 
 * Let’s say the two pointers are called low and high 
 * which are pointing to the first and the last element of the array respectively. 
 * So while iterating, we will move all 0s before low and all 2s after high 
 * so that in the end, all 1s will be between low and high.
 * 
 * Time O(N)  Space O(1)
 */
function dutch_flag_sort(arr) {
  // all elements < low are 0, and all elements > high are 2
  // all elements from >= low < i are 1

  let i = 0;
  let low = 0;
  let high = arr.length - 1;
  while (i <= high) {
    if (arr[i] === 0) {
      [arr[i], arr[low]] = [arr[low], arr[i]]; // swap
      i++;
      low++;
    } else if (arr[i] === 1) {
      i++;
    } else {
      [arr[i], arr[high]] = [arr[high], arr[i]]; // swap
      high--;
    }
  }
}
