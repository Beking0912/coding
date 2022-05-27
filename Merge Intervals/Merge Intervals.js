/**
 * Given a list of intervals, merge all the overlapping intervals to produce a list
 * that has only mutually exclusive intervals.
 *
 * 首先对区间按照起始端点进行升序排序，然后逐个判断当前区间是否与前一个区间重叠，
 * 如果不重叠的话将当前区间直接加入结果集，反之如果重叠的话，就将当前区间与前一个区间进行合并。
 * 
 * https://leetcode.cn/problems/merge-intervals/solution/chi-jing-ran-yi-yan-miao-dong-by-sweetiee/
 *
 * O(N∗logN)  O(N)
 */
class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

function merge(intervals) {
  if (intervals.length < 2) {
    return intervals;
  }
  intervals.sort((a, b) => a.start - b.start);

  const mergedIntervals = [];
  let start = intervals[0].start;
  let end = intervals[0].end;
  for (i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval.start <= end) {
      end = Math.max(interval.end, end);
    } else {
      mergedIntervals.push(new Interval(start, end));
      start = interval.start;
      end = interval.end;
    }
  }
  mergedIntervals.push(new Interval(start, end));
  return mergedIntervals;
}

function merge2(intervals) {
  if (intervals.length < 2) {
    return intervals;
  }
  intervals.sort((a, b) => a[0] - b[0]);

  const mergedIntervals = [];
  let [start, end] = intervals[0];
  for (i = 1; i < intervals.length; i++) {
    const [curStart, curEnd] = intervals[i];
    if (curStart <= end) {
      end = Math.max(curEnd, end);
    } else {
      mergedIntervals.push([start, end]);
      start = curStart;
      end = curEnd;
    }
  }
  mergedIntervals.push([start, end]);
  return mergedIntervals;
}

// 2
function merge1(intervals) {
  intervals.sort((a, b) => a[0] - b[0]); // 先按照区间起始位置排序

  let index = -1;
  let res = new int[intervals.length][2]();
  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    // 如果结果数组是空的，或者当前区间的起始位置 > 结果数组中最后区间的终止位置，说明不重叠。
    // 则不合并，直接将当前区间加入结果数组。
    if (index == -1 || interval[0] > res[index][1]) {
      res[++index] = interval;
    } else {
      // 反之说明重叠，则将当前区间合并至结果数组的最后区间
      res[index][1] = Math.max(res[index][1], interval[1]);
    }
  }
  return Arrays.copyOf(res, index + 1);
}
