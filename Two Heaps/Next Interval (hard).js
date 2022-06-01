/**
 * O(N*logN)  O(N)
 * 
 * [[2,3], [3,4], [5,6]]
 */
function find_next_interval(intervals) {
  const n = intervals.length;
  const result = Array(n).fill(0);

  const maxStartHeap = new Heap([], null, (a, b) => a[0] - b[0]);
  const maxEndHeap = new Heap([], null, (a, b) => a[0] - b[0]);

  for (endIndex = 0; endIndex < n; endIndex++) {
    maxStartHeap.push([intervals[endIndex].start, endIndex]); // [5,2],[2,0],[3,1]
    maxEndHeap.push([intervals[endIndex].end, endIndex]); // [6,2],[3,0],[4,1]
  }

  for (i = 0; i < n; i++) {
    const [topEnd, endIndex] = maxEndHeap.pop();
    result[endIndex] = -1;
    if (maxStartHeap.peek()[0] >= topEnd) {
      let [topStart, startIndex] = maxStartHeap.pop();
      while (maxStartHeap.length > 0 && maxStartHeap.peek()[0] >= topEnd) {
        [topStart, startIndex] = maxStartHeap.pop();
      }
      result[endIndex] = startIndex;
      maxStartHeap.push([topStart, startIndex]);
    }
  }
  return result;
}
