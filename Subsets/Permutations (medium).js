/**
 * Given a set of distinct numbers, find all of its permutations.
 * O(N∗N!) O(N∗N!)
 *
 * https://leetcode.cn/problems/permutations/
 */
function find_permutations(nums) {
  const result = [];
  const permutations = [];
  permutations.push([]);

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const len = permutations.length;

    for (let p = 0; p < len; p++) {
      const oldPermutation = permutations.shift();

      for (let j = 0; j < oldPermutation.length + 1; j++) {
        const newPermutation = oldPermutation.slice(0);
        newPermutation.splice(j, 0, currentNumber);
        if (newPermutation.length === nums.length) {
          result.push(newPermutation);
        } else {
          permutations.push(newPermutation);
        }
      }
    }
  }
  return result;
}

// Recursive Solution
function generate_permutations(nums) {
  const result = [];
  generate_permutations_recursive(nums, 0, [], result);
  return result;
}

function generate_permutations_recursive(nums, index, currentPermutation, result) {
  if (index === nums.length) {
    result.push(currentPermutation);
  } else {
    for (let i = 0; i < currentPermutation.length + 1; i++) {
      newPermutation = currentPermutation.slice(0);
      newPermutation.splice(i, 0, nums[index]); 
      generate_permutations_recursive(nums, index + 1, newPermutation, result);
    }
  }
}
