/**
 * Given an unsorted array of numbers, find Kth smallest number in it.
 *
 * use a max-heap instead of a min-heap
 * the root is the biggest element in the max heap
 *
 */
function find_Kth_smallest_number(nums, k) {
  const maxHeap = new Heap();
  for (i = 0; i < k; i++) {
    maxHeap.push(nums[i]);
  }

  for (i = k; i < nums.length; i++) {
    if (nums[i] < maxHeap.peek()) {
      maxHeap.pop();
      maxHeap.push(nums[i]);
    }
  }
  return maxHeap.peek();
}
