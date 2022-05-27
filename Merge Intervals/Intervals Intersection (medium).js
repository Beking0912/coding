/**
 * Given two lists of intervals, find the intersection of these two lists.
 * Each list consists of disjoint intervals sorted on their start time.
 *
 * https://leetcode.cn/problems/interval-list-intersections/
 *
 * 一个指针扫描 A 数组，一个指针扫描 B 数组，根据子区间的两端，求出一个交集区间
 * 指针移动，直至指针越界，得到由交集区间组成的数组。
 *
 * O(N+M)  O(1)
 */
function merge(a, b) {
    let result = [],
    i = 0,
    j = 0;

  while (i < a.length && j < b.length) {
    a_overlaps_b = a[i][0] >= b[j][0] && a[i][0] <= b[j][1];
    b_overlaps_a = b[j][0] >= a[i][0] && b[j][0] <= a[i][1];

    if (a_overlaps_b || b_overlaps_a) {
      const start = Math.max(a[i][0], b[j][0]);
      const end = Math.min(a[i][1], b[j][1]);
      result.push([start, end]);
    }

    if (a[i][1] < b[j][1]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
}

// 2
const intervalIntersection = (A, B) => {
  const res = [];
  let i = 0;
  let j = 0;
  while (i < A.length && j < B.length) {
    const start = Math.max(A[i][0], B[j][0]); // 交集区间的左端，取它们的较大者
    const end = Math.min(A[i][1], B[j][1]); // 交集区间的右端，取它们的较小者

    if (start <= end) { // 形成了交集区间
      res.push([start, end]);
    }

    if (A[i][1] < B[j][1]) { // 谁先结束，谁的指针就步进，考察下一个子区间
      i++;
    } else {
      j++;
    }
  }
  return res;
};
