/**
 * Given an unsorted array of numbers, find the top ‘K’ frequently occurring numbers in it.
 *
 * In the Min Heap, instead of comparing numbers we will compare their frequencies in order to get frequently occurring numbers
 * O(N+N∗logK) O(N)
 * 
 * https://leetcode.cn/problems/top-k-frequent-elements/
 */
function find_k_frequent_numbers(nums, k) {
  const numFrequencyMap = {};
  nums.forEach((num) => {
    if (!(num in numFrequencyMap)) {
      numFrequencyMap[num] = 1;
    } else {
      numFrequencyMap[num]++;
    }
  });

  const minHeap = new Heap([], null, (a, b) => b[0] - a[0]);

  Object.keys(numFrequencyMap).forEach((num) => {
    minHeap.push([numFrequencyMap[num], num]);
    if (minHeap.length > k) {
      minHeap.pop();
    }
  });

  const topNumbers = [];
  while (minHeap.length > 0) {
    topNumbers.push(minHeap.pop()[1]);
  }

  return topNumbers;
}
