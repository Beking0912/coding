/**
 * Given a string, sort it based on the decreasing frequency of its characters.
 */
function sort_character_by_frequency(str) {
  const charFrequencyMap = {};
  for (i = 0; i < str.length; i++) {
    const chr = str[i];
    if (chr in charFrequencyMap) {
      charFrequencyMap[chr]++;
    } else {
      charFrequencyMap[chr] = 1;
    }
  }

  const maxHeap = new Heap([], null, (a, b) => a[0] - b[0]);
  
  Object.keys(charFrequencyMap).forEach((key) => {
    maxHeap.push([charFrequencyMap[key], key]);
  });

  const sortedString = [];
  while (maxHeap.length > 0) {
    [frequency, char] = maxHeap.pop();
    for (let i = 0; i < frequency; i++) {
      sortedString.push(char);
    }
  }
  return sortedString.join("");
}
