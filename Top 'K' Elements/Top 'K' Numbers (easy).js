/**
 * Given an unsorted array of numbers, find the ‘K’ largest numbers in it.
 * 
 * Take out the smallest number from the heap, and Insert the larger number into the heap.
 * O(N∗logK)  O(K)
 */
function find_k_largest_numbers(nums, k) {
  const minHeap = new Heap([], null, (a, b) => b - a);
  for (i = 0; i < k; i++) {
    minHeap.push(nums[i]);
  }

  for (i = k; i < nums.length; i++) {
    if (nums[i] > minHeap.peek()) {
      minHeap.pop();
      minHeap.push(nums[i]);
    }
  }
  return minHeap.toArray();
}
