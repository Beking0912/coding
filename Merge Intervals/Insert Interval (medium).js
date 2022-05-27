/**
 * Given a list of non-overlapping intervals sorted by their start time,
 * insert a given interval at the correct position and merge all necessary intervals
 * to produce a list that has only mutually exclusive intervals.
 * 
 * Time O(N)   Space O(N)
 *
 * 1. 首先将新区间左边且相离的区间加入结果集（遍历时，如果当前区间的结束位置小于新区间的开始位置，说明当前区间在新区间的左边且相离）；
 * 2. 接着判断当前区间是否与新区间重叠，重叠的话就进行合并，直到遍历到当前区间在新区间的右边且相离，将最终合并后的新区间加入结果集；
 * 3. 最后将新区间右边且相离的区间加入结果集。
 *
 * https://leetcode.cn/problems/insert-interval/solution/shou-hua-tu-jie-57-cha-ru-qu-jian-fen-cheng-3ge-ji/
 */
function insert(intervals, newInterval) {
  const res = [];
  let i = 0;
  const len = intervals.length;

  // 当前遍历的是蓝左边的，不重叠的区间
  while (i < len && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i]);
    i++;
  }

  // 当前遍历是有重叠的区间
  while (i < len && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]); //左端取较小者，更新给兰区间的左端
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]); //右端取较大者，更新给兰区间的右端
    i++;
  }
  res.push(newInterval); // 循环结束后，兰区间为合并后的区间，推入res

  // 在蓝右边，没重叠的区间
  while (i < len) {
    res.push(intervals[i]);
    i++;
  }
  return res;
}
