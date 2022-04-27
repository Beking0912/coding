/**
 * Given an array of positive numbers and a positive number ‘k,’ 
 * find the maximum sum of any contiguous subarray of size ‘k’.
 * 
 * 1. Subtract the element going out of the sliding window, 
 *    i.e., subtract the first element of the window.
 * 2. Add the new element getting included in the sliding window, 
 *    i.e., the element coming right after the end of the window.
 * 
 * Time Complexity O(N)  Space Complexity O(1)
 */

 function max_sub_array_of_size_k(k, arr) {
    let maxSum = 0,
      windowSum = 0,
      windowStart = 0;
  
    for (window_end = 0; window_end < arr.length; window_end++) {
      windowSum += arr[window_end]; // add the next element
      if (window_end >= k - 1) {
        maxSum = Math.max(maxSum, windowSum);
        windowSum -= arr[windowStart]; // subtract the element going out
        windowStart += 1; // slide the window ahead
      }
    }
    return maxSum;
  }
  
  
  console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);
  console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`);
