/**
 * Given an array arr of unsorted numbers and a target sum, 
 * count all triplets in it such that arr[i] + arr[j] + arr[k] < target
 * where i, j, and k are three different indices. Write a function to return the count of such triplets.
 * 
 * Time O(N^2)  Space O(N)
 */
function triplet_with_smaller_sum(arr, target) {
  arr.sort((a, b) => a - b);
  let count = 0;
  for (i = 0; i < arr.length - 2; i++) {
    count += search_pair(arr, target - arr[i], i);
  }
  return count;
}

function search_pair(arr, target_sum, first) {
  let count = 0;
  let left = first + 1;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] < target_sum) { // found the triplet
      count += right - left;
      left++;
    } else {
      right--;
    }
  }
  return count;
}
