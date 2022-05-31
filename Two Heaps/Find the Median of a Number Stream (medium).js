/**
 * Design a class to calculate the median of a number stream.
 * https://leetcode.cn/problems/find-median-from-data-stream/
 * 
 * 使用两个堆，来存储数据流
 * 使用最小堆A保存较大的一半，最大堆B保存较小的一半
 * 
 * 若总长度N为奇数，则A个数为(N+1)/2，B个数为(N-1)/2
 * 若总长度N为偶数，则A个数为N/2，B个数为N/2
 * 
 * 插入操作：当N为偶数，需要向A添加一个元素，先将num插入B，再将B堆顶弹出，插入A
 * 插入操作：当N为奇数，需要向B添加一个元素，先将num插入A，再将A堆顶弹出，插入B
 * 中位数：可以由A和B的堆顶元素得到，若N为奇数，中位数=A的堆顶；若N为偶数，则中位数=(A的堆顶+B的堆顶)/2
 * 
 * insert_num O(logN) find_medianO (1)    Space O(N)
 */
const Heap = require("./collections/heap"); //http://www.collectionsjs.com

class MedianOfAStream {
  constructor() {
    this.maxHeap = new Heap([], null, (a, b) => a - b);
    this.minHeap = new Heap([], null, (a, b) => b - a);
  }

  insert_num(num) {
    this.maxHeap.push(num);
    this.minHeap.push(this.maxHeap.pop());

    if (this.maxHeap.length < this.minHeap.length) {
        this.maxHeap.push(this.minHeap.pop());
    }
  }

  insert_num2(num) {
    if (this.maxHeap.length === 0 || this.maxHeap.peek() >= num) {
      this.maxHeap.push(num);
    } else {
      this.minHeap.push(num);
    }
  
    if (this.maxHeap.length > this.minHeap.length + 1) {
      this.minHeap.push(this.maxHeap.pop());
    } else if (this.maxHeap.length < this.minHeap.length) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }

  find_median() {
    if (this.maxHeap.length === this.minHeap.length) {
      return this.maxHeap.peek() / 2.0 + this.minHeap.peek() / 2.0;
    }
    return this.maxHeap.peek();
  }
}
