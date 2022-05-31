/**
 * Given an array of numbers and a number ‘k’,
 * find the median of all the ‘k’ sized sub-arrays (or windows) of the array.
 * 
 * https://leetcode.cn/problems/sliding-window-median/
 */
class SlidingWindowMedian {
  constructor() {
    this.maxHeap = new Heap([], null, (a, b) => a - b);
    this.minHeap = new Heap([], null, (a, b) => b - a);
  }

  find_sliding_window_median(nums, k) {
    const result = Array(nums.length - k + 1).fill(0.0); // 一共会产生 nums.length-k+1 个中位数
    for (let i = 0; i < nums.length; i++) {
      if (this.maxHeap.length === 0 || nums[i] <= this.maxHeap.peek()) {
        this.maxHeap.push(nums[i]);
      } else {
        this.minHeap.push(nums[i]);
      }

      this.rebalance_heaps();

      const index = i - k + 1;
      if (index >= 0) {
        if (this.maxHeap.length === this.minHeap.length) {
          result[index] = this.maxHeap.peek() / 2.0 + this.minHeap.peek() / 2.0;
        } else {
          result[index] = this.maxHeap.peek();
        }

        const elementToBeRemoved = nums[index];
        if (elementToBeRemoved <= this.maxHeap.peek()) {
          this.maxHeap.delete(elementToBeRemoved);
        } else {
          this.minHeap.delete(elementToBeRemoved);
        }

        this.rebalance_heaps();
      }
    }

    return result;
  }

  rebalance_heaps() {
    if (this.maxHeap.length > this.minHeap.length + 1) {
      this.minHeap.push(this.maxHeap.pop());
    } else if (this.maxHeap.length < this.minHeap.length) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }
}
