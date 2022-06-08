/**
 * Design a class to efficiently find the Kth largest element in a stream of numbers.
 * https://leetcode.cn/problems/kth-largest-element-in-an-array/
 * 
 * O(logK)  O(K)
 */
class KthLargestNumberInStream {
  constructor(nums, k) {
    this.minHeap = new Heap([], null, (a, b) => b - a);
    this.k = k;

    // add the numbers in the min heap
    nums.forEach((num) => {
      this.add(num);
    });
  }

  add(num) {
    // add the new number in the min heap
    this.minHeap.push(num);

    // if heap has more than 'k' numbers, remove one number
    if (this.minHeap.length > this.k) {
      this.minHeap.pop();
    }

    // return the 'Kth largest number
    return this.minHeap.peek();
  }
}
