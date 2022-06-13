/**
 * Given a string, find if its letters can be rearranged
 * in such a way that no two same characters come next to each other.
 *
 * https://leetcode.cn/problems/reorganize-string/
 * 
 * O(N∗logN)  O(N)
 */
function rearrange_string(str) {
  const charFrequencyMap = {};
  for (i = 0; i < str.length; i++) {
    const chr = str[i];
    charFrequencyMap[chr] = (charFrequencyMap[chr] || 0) + 1;
  }

  const maxHeap = new Heap([], null, (a, b) => a[0] - b[0]);
  Object.keys(charFrequencyMap).forEach((char) => {
    maxHeap.push([charFrequencyMap[char], char]);
  });

  let previousChar = null,
    previousFrequency = 0,
    resultString = [];
  while (maxHeap.length > 0) {
    const [frequency, char] = maxHeap.pop();
    if (previousChar !== null && previousFrequency > 0) {
      maxHeap.push([previousFrequency, previousChar]);
    }
    // append the current character to the result string and decrement its count
    resultString.push(char);
    previousChar = char;
    previousFrequency = frequency - 1; // decrement the frequency
  }

  // if we were successful in appending all the characters to the result string, return it
  if (resultString.length === str.length) {
    return resultString.join("");
  }
  return "";
}
