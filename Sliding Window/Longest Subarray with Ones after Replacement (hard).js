/**
 * Given an array containing 0s and 1s, 
 * if you are allowed to replace no more than ‘k’ 0s with 1s, 
 * find the length of the longest contiguous subarray having all 1s.
 * 
 * O(N) O(1)
 */

 function length_of_longest_substring(arr, k) {
    let windowStart = 0,
      maxLength = 0,
      maxOnesCount = 0;
  
    for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      if (arr[windowEnd] === 1) {
        maxOnesCount++;
      }
  
      if ((windowEnd - windowStart + 1 - maxOnesCount) > k) {
        if (arr[windowStart] === 1) {
          maxOnesCount--;
        }
        windowStart++;
      }
  
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
  }
  
  
  console.log(length_of_longest_substring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
  console.log(length_of_longest_substring([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3));