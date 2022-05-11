/**
 * Given a string, find the length of the longest substring, which has all distinct characters.
 * 
 * We can use a HashMap to remember the last index of each character we have processed. 
 * Whenever we get a duplicate character, we will shrink our sliding window to ensure that 
 * we always have distinct characters in the sliding window.
 * 
 * Time Complexity O(N)  Space Complexity O(1)
 */
 function non_repeat_substring(str) {
    let windowStart = 0,
      maxLength = 0,
      charIndexMap = {};
  
    // try to extend the range [windowStart, windowEnd]
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      if (rightChar in charIndexMap) {
        windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
      }
      charIndexMap[rightChar] = windowEnd;
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
  }  
