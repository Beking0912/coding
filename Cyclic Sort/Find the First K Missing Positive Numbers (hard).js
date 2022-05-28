/**
 * Find the First K Missing Positive Numbers (hard)
 *
 * Given an unsorted array containing numbers and a number ‘k’,
 * find the first ‘k’ missing positive numbers in the array.
 * 
 * O(n+k) O(k)
 */
function find_first_k_missing_positive(nums, k) {
  let i = 0;
  while (i < nums.length) {
    const j = nums[i] - 1;
    if (nums[i] > 0 && nums[i] <= nums.length && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i++;
    }
  }
  
  const missingNumbers = [];
  const extraNumbers = new Set();
  for (i = 0; i < nums.length; i++) {
    if (missingNumbers.length < k) {
      if (nums[i] !== i + 1) {
        missingNumbers.push(i + 1);
        extraNumbers.add(nums[i]);
      }
    }
  }

  i = 1;
  while (missingNumbers.length < k) {
    const candidateNumber = i + nums.length;
    if (!extraNumbers.has(candidateNumber)) {
      missingNumbers.push(candidateNumber);
    }
    i++;
  }
  return missingNumbers;
}
