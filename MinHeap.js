class MinHeap {
  constructor() {
    this.heap = [];
  }
  // 交换节点位置
  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }
  // 获得父节点
  getParentIndex(i) {
    return (i - 1) >> 1;
  }
  // 获得左节点
  getleftIndex(i) {
    return 2 * i + 1;
  }
  // 获得右节点
  getrightIndex(i) {
    return 2 * i + 2;
  }
  // 上移
  shiftUp(index) {
    if (index === 0) return;

    const parentIndex = this.getParentIndex(index);
    if (
      this.heap[parentIndex] &&
      this.heap[parentIndex].val > this.heap[index].val
    ) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  // 下移
  shiftDown(index) {
    const leftIndex = this.getleftIndex(index);
    const rightIndex = this.getrightIndex(index);
    if (
      this.heap[leftIndex] &&
      this.heap[leftIndex].val < this.heap[index].val
    ) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (
      this.heap[rightIndex] &&
      this.heap[rightIndex].val < this.heap[index].val
    ) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }
  // 插入
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }
  // 删除堆顶
  pop() {
    if (this.size() === 1) return this.heap.shift();
    const top = this.heap[0];
    // pop()方法删除数组最后一个元素并返回，赋值给堆顶
    this.heap[0] = this.heap.pop();
    // 对堆顶重新排序
    this.shiftDown(0);
    return top;
  }
  // 获取堆顶
  peek() {
    return this.heap[0];
  }
  // 获取堆的大小
  size() {
    return this.heap.length;
  }
}
