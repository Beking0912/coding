/**
 * Given an array, find the sum of all numbers between the K1’th and K2’th smallest elements of that array.
 */
const find_sum_of_elements = function (nums, k1, k2) {
  return (nums.sort((a, b) => a - b).slice(k1, k2 - 1) || []).reduce(
    (a, b) => a + b
  );
};

// 2
function find_sum_of_elements(nums, k1, k2) {
  const minHeap = new Heap(nums, null, (a, b) => b - a);

  for (i = 0; i < k1; i++) {
    minHeap.pop();
  }

  let elementSum = 0;
  for (i = 0; i < k2 - k1 - 1; i++) {
    elementSum += minHeap.pop();
  }

  return elementSum;
}
