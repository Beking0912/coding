/**
 * Given ‘M’ sorted arrays, find the smallest range that includes at least one number from each of the ‘M’ lists.
 *
 * https://leetcode.cn/problems/smallest-range-covering-elements-from-k-lists/
 */
function find_smallest_range(lists) {
  const minHeap = new Heap([], null, (a, b) => b[0] - a[0]);
  let rangeStart = 0,
    rangeEnd = Infinity,
    currentMaxNumber = -Infinity;

  // put the 1st element of each array in the max heap
  lists.forEach((list) => {
    minHeap.push([list[0], 0, list]);
    currentMaxNumber = Math.max(currentMaxNumber, list[0]);
  });

  // take the smallest(top) element from the min heap, if it gives us smaller range, update the ranges
  // if the array of the top element has more elements, insert the next element in the heap
  while (minHeap.length === lists.length) {
    const [num, i, list] = minHeap.pop();
    if (rangeEnd - rangeStart > currentMaxNumber - num) {
      rangeStart = num;
      rangeEnd = currentMaxNumber;
    }
    if (list.length > i + 1) {
      minHeap.push([list[i + 1], i + 1, list]); // insert the next element in the heap
      currentMaxNumber = Math.max(currentMaxNumber, list[i + 1]);
    }
  }

  return [rangeStart, rangeEnd];
}

// 滑动窗口
// 首先将 kk 组数据升序合并成一组，并记录每个数字所属的组
// 合并升序
// 只看所属组
var smallestRange = function (nums) {
  let points = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      points.push([nums[i][j], i]);
    }
  }
  points.sort((a, b) => a[0] - b[0]);
  let counts = new Array(nums.length).fill(0);
  let countUnique = 0,
    minStart = -1,
    minLen = Number.MAX_SAFE_INTEGER;
  for (let i = 0, j = 0; j < points.length; j++) {
    if (counts[points[j][1]]++ === 0) countUnique++;
    while (countUnique === counts.length) {
      if (points[j][0] - points[i][0] + 1 < minLen) {
        minStart = points[i][0];
        minLen = points[j][0] - points[i][0] + 1;
      }
      let prev = points[i][0];
      while (i <= j && prev === points[i][0]) {
        if (--counts[points[i++][1]] === 0) countUnique--;
      }
    }
  }
  return [minStart, minStart + minLen - 1];
};
