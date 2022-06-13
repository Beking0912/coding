/**
 * Given a string and a number ‘K’, find if the string can be rearranged such that
 * the same characters are at least ‘K’ distance apart from each other.
 *
 * https://www.lintcode.com/problem/907/
 * 
 * O(N∗logN)  O(N)
 */
function reorganize_string(str, k) {
  if (k <= 1) return str;

  const charFrequencyMap = {};
  for (i = 0; i < str.length; i++) {
    const chr = str[i];
    charFrequencyMap[chr] = (charFrequencyMap[chr] || 0) + 1;
  }

  const maxHeap = new Heap([], null, (a, b) => a[0] - b[0]);
  Object.keys(charFrequencyMap).forEach((char) => {
    maxHeap.push([charFrequencyMap[char], char]);
  });

  const queue = new Deque();
  const resultString = [];
  while (maxHeap.length > 0) {
    let [frequency, char] = maxHeap.pop();
    resultString.push(char);
    queue.push([char, frequency - 1]);
    if (queue.length === k) {
      [char, frequency] = queue.shift();
      if (frequency > 0) {
        maxHeap.push([frequency, char]);
      }
    }
  }

  /**
    let previousChar = null,
        previousFrequency = 0,
        resultString = [];
    while (maxHeap.length > 0) {
        const [frequency, char] = maxHeap.pop();
        if (previousChar !== null && previousFrequency > 0) {
            maxHeap.push([previousFrequency, previousChar]);
        }
        resultString.push(char);
        previousChar = char;
        previousFrequency = frequency - 1;
    }
   */

  if (resultString.length === str.length) {
    return resultString.join("");
  }
  return "";
}
