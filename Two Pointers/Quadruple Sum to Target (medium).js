/**
 * Given an array of unsorted numbers and a target number,
 * find all unique quadruplets in it,
 * whose sum is equal to the target number.
 *
 * We can follow a similar approach to iterate through the array, taking one number at a time.
 * At every step during the iteration, we will search for the quadruplets similar to Triplet Sum to Zero
 * whose sum is equal to the given target.
 * 
 * Time O(N^3)  Space O(N)
 * 
 * 类似 Triplet Sum Close to Target (medium) 
 */
function search_quadruplets(arr, target) {
  arr.sort((a, b) => a - b);
  const quadruplets = [];
  for (let i = 0; i < arr.length - 3; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < arr.length - 2; j++) {
      if (j > i + 1 && arr[j] === arr[j - 1]) {
        continue;
      }
      search_pairs(arr, target, i, j, quadruplets);
    }
  }
  return quadruplets;
}

function search_pairs(arr, targetSum, first, second, quadruplets) {
  let left = second + 1;
  let right = arr.length - 1;
  while (left < right) {
    sum = arr[first] + arr[second] + arr[left] + arr[right];
    if (sum === targetSum) {
      quadruplets.push([arr[first], arr[second], arr[left], arr[right]]);
      left++;
      right--;
      while (left < right && arr[left] === arr[left - 1]) {
        left++; // skip same element to avoid duplicate quadruplets
      }
      while (left < right && arr[right] === arr[right + 1]) {
        right--; // skip same element to avoid duplicate quadruplets
      }
    } else if (sum < targetSum) {
      left++;
    } else {
      right--;
    }
  }
}
