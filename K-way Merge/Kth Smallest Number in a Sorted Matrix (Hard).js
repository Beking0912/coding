/**
 * Given an N * N matrix where each row and column is sorted in ascending order,
 * find the Kth smallest element in the matrix.
 *
 * https://leetcode.cn/problems/kth-smallest-element-in-a-sorted-matrix/
 */

function find_Kth_smallest(matrix, k) {
  const minHeap = new Heap([], null, (a, b) => b[0] - a[0]);

  for (i = 0; i < Math.min(k, matrix.length); i++) {
    minHeap.push([matrix[i][0], 0, matrix[i]]);
  }

  let numberCount = 0,
    number = 0;
  while (minHeap.length > 0) {
    [number, i, row] = minHeap.pop();
    numberCount += 1;
    if (numberCount === k) {
      break;
    }

    if (row.length > i + 1) {
      minHeap.push([row[i + 1], i + 1, row]);
    }
  }

  return number;
}

// 二分法
var kthSmallest = function (matrix, k) {
  const n = matrix.length;

  let left = matrix[0][0];
  let right = matrix[n - 1][n - 1];
  while (left < right) {
    const mid = left + ((right - left) >> 1);
    if (check(matrix, mid, k, n)) {
      right = mid; // 第k小的数在左半部分，可能包含mid
    } else {
      left = mid + 1; // 第k小的数在右半部分，且不包含mid
    }
  }
  return left;
};
var check = function (matrix, mid, k, n) {
  let num = 0;

  let i = n - 1; // 以列为单位找，找到每一列最后一个<=mid的数即知道每一列有多少个数<=mid
  let j = 0;
  while (i >= 0 && j < n) {
    if (matrix[i][j] <= mid) {
      num += i + 1; // 第j列有i+1个元素<=mid
      j++;
    } else {
      i--; // 第j列目前的数大于mid，需要继续在当前列往上找
    }
  }
  return num >= k;
};
