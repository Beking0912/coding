/**
 * Given an array of sorted numbers and a target sum, 
 * find a pair in the array whose sum is equal to the given target.
 * 
 * Time O(N)  Space O(1)
 */
 function pair_with_target_sum(arr, targetSum) {
    let left = 0,
      right = arr.length - 1;
    while (left < right) {
      const currentSum = arr[left] + arr[right];
      if (currentSum === targetSum) {
        return [left, right];
      }
  
      if (targetSum > currentSum) {
        left += 1; // we need a pair with a bigger sum
      } else {
        right -= 1; // we need a pair with a smaller sum
      }
    }
    return [-1, -1];
  }
  
  /**
   * An Alternate approach
   * 
   * Time O(N)  Space O(N)
   */
  function pair_with_target_sum(arr, targetSum) {
    const nums = {}; // to store numbers and their indices
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      if (targetSum - num in nums) {
        return [nums[targetSum - num], i];
      }
      nums[arr[i]] = i;
    }
    return [-1, -1];
  }
  