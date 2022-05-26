/**
 * Given an array, find the length of the smallest subarray in it which
 * when sorted will sort the whole array.
 *
 * O(N)  O(1)
 */
function shortest_window_sort(arr) {
  let low = 0;
  let high = arr.length - 1;
  while (low < arr.length - 1 && arr[low] <= arr[low + 1]) {
    low++; // 从头找到第一个不满足升序的index
  }

  if (low === arr.length - 1) { // 已经是排序状态
    return 0;
  }

  while (high > 0 && arr[high] >= arr[high - 1]) {
    high--; // 从尾找到第一个不满足降序的index
  }

  let subarrayMax = -Infinity;
  let subarrayMin = Infinity;
  for (k = low; k < high + 1; k++) { // 在[low, high]区间找出最大/小值
    subarrayMax = Math.max(subarrayMax, arr[k]);
    subarrayMin = Math.min(subarrayMin, arr[k]);
  }

  while (low > 0 && arr[low - 1] > subarrayMin) {
    low--; // 如果在low前面存在比最小值还大的值 说明前面的也要重新排序
  }
  while (high < arr.length - 1 && arr[high + 1] < subarrayMax) {
    high++; // 如果在high后面存在比最大值还小的值 说明后面的也要重新排序
  }

  // 找到需要排序的区间 [low, high]
  return high - low + 1;
}
