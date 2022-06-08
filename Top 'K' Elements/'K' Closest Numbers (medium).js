/**
 * Given a sorted number array and two integers ‘K’ and ‘X’, find ‘K’ closest numbers to ‘X’ in the array.
 * Return the numbers in the sorted order. ‘X’ is not necessarily present in the array.
 */

// 堆栈的双指针 O(N - K) O(1)
// 在arr的长度超过k时，迭代地从数组的前端和末端去除与x相差较大的元素。(如果有相同的差异，从末尾删除一个元素)
const findClosestElements = function (arr, k, x) {
  let index = 0;
  while (k < arr.length - index) {
    const last = arr.pop();
    if (last - x < x - arr[index]) {
      index++;
      arr.push(last);
    }
  }
  return arr.slice(index);
};

// 2 heap
function find_closest_elements(arr, K, X) {
  const index = binary_search(arr, X);
  let low = index - K,
    high = index + K;

  low = Math.max(low, 0);
  high = Math.min(high, arr.length - 1);

  const minHeap = new Heap([], null, (a, b) => b[0] - a[0]);
  for (i = low; i < high + 1; i++) {
    minHeap.push([Math.abs(arr[i] - X), arr[i]]);
  }

  const result = [];
  for (i = 0; i < K; i++) {
    result.push(minHeap.pop()[1]);
  }

  result.sort((a, b) => a - b);
  return result;
}

// 3 Two Pointers
// O(logN+K) O(1)
function find_closest_elements(arr, K, X) {
  const result = new Deque();
  const index = binary_search(arr, X);
  let leftPointer = index,
    rightPointer = index + 1;
  const n = arr.length;
  for (i = 0; i < K; i++) {
    if (leftPointer >= 0 && rightPointer < n) {
      const diff1 = Math.abs(X - arr[leftPointer]);
      const diff2 = Math.abs(X - arr[rightPointer]);
      if (diff1 <= diff2) {
        result.unshift(arr[leftPointer]);
        leftPointer -= 1;
      } else {
        result.push(arr[rightPointer]);
        rightPointer += 1;
      }
    } else if (leftPointer >= 0) {
      result.unshift(arr[leftPointer]);
      leftPointer -= 1;
    } else if (rightPointer < n) {
      result.push(arr[rightPointer]);
      rightPointer += 1;
    }
  }

  return result.toArray();
}

function binary_search(arr, target) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  if (low > 0) {
    return low - 1;
  }
  return low;
}
