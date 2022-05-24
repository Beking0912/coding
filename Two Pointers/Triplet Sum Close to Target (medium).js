/**
 * Given an array of unsorted numbers and a target number, 
 * find a triplet in the array whose sum is as close to the target number as possible, 
 * return the sum of the triplet. 
 * If there are more than one such triplet, return the sum of the triplet with the smallest sum.
 * 
 * https://leetcode.cn/problems/3sum-closest/solution/zui-jie-jin-de-san-shu-zhi-he-by-leetcode-solution/
 * 首先考虑枚举第一个元素 a，对于剩下的两个元素 b 和 ，我们希望它们的和最接近 target−a
 * 用 p_bp 和 p_cp 分别表示指向 bb 和 cc 的指针，
 * 初始时，p_bp 指向位置 i+1i+1，即左边界；p_cp 指向位置 n-1n−1，即右边界。
 * 在每一步枚举的过程中，我们用 a+b+ca+b+c 来更新答案，并且：
 * 如果 a+b+c ≥ target，那么就将 p_cp 向左移动一个位置；
 * 如果 a+b+c < target，那么就将 p_bp 向右移动一个位置。
 * 
 * Time O(N^2)  Space O(N)
 */
 function triplet_sum_close_to_target(arr, targetSum) {
    arr.sort((a, b) => a - b);
    let smallest_difference = Infinity;
    for (let i = 0; i < arr.length - 2; i++) {
      let left = i + 1;
      let right = arr.length - 1;
      while (left < right) {
        const target_diff = targetSum - arr[i] - arr[left] - arr[right];
        if (target_diff === 0) { // we've found a triplet with an exact sum
          return targetSum; // return sum of all the numbers
        }
  
        // the second part of the following 'if' is to handle the smallest sum when we have more than one solution
        if (Math.abs(target_diff) < Math.abs(smallest_difference) ||
          (Math.abs(target_diff) === Math.abs(smallest_difference) && target_diff > smallest_difference)) {
          smallest_difference = target_diff; // save the closest and the biggest difference
        }
  
        if (target_diff > 0) {
          left += 1; // we need a triplet with a bigger sum
        } else {
          right -= 1; // we need a triplet with a smaller sum
        }
      }
    }
    return targetSum - smallest_difference;
  }
  
  
  console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
  console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
  console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));