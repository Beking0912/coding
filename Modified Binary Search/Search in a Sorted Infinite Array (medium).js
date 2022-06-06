/**
 * Given an infinite sorted array (or an array with unknown size),
 * find if a given number ‘key’ is present in the array.
 *
 * diff: we don’t know the bounds of the array
 * O(logN)  O(1)
 */
function search_in_infinite_array(reader, key) {
  let start = 0;
  let end = 1;

  // Since key is greater than the element at index end, we will double our bounds 
  while (reader.get(end) < key) {
    newStart = end + 1;
    end += (end - start + 1) * 2;
    start = newStart;
  }

  // Since key is less than the element at index end, we've found the searchable bounds
  return binary_search(reader, key, start, end);
}

function binary_search(reader, key, start, end) {
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (key < reader.get(mid)) {
      end = mid - 1;
    } else if (key > reader.get(mid)) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

//
//
class ArrayReader {
  constructor(arr) {
    this.arr = arr;
  }

  get(index) {
    if (index >= this.arr.length) {
      return Infinity;
    }
    return this.arr[index];
  }
}
let reader = new ArrayReader([
  4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30,
]);
