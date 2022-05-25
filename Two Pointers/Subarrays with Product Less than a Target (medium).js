/**
 * Given an array with positive numbers and a positive target number,
 * find all of its contiguous subarrays whose product is less than the target number.
 * 
 * Time O(N^3)  Space O(N)
 */
const Deque = require("./collections/deque"); //http://www.collectionsjs.com

function find_subarrays(arr, target) {
  let result = [];
  let product = 1;
  let left = 0;
  for (let right = 0; right < arr.length; right++) {
    product *= arr[right];
    while (product >= target && left <= right) {
      product /= arr[left];
      left += 1;
    }

    const tempList = new Deque();
    for (let i = right; i > left - 1; i--) {
      tempList.unshift(arr[i]);
      result.push(tempList.toArray());
    }
  }
  return result;
}
