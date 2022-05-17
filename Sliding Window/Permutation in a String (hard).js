/**
 * Given a string and a pattern, find out if the string contains any permutation of the pattern.
 * 
 * Time O(N+M)  Space O(M)
 * 
 * 翻译题目：
 * 相当给定一个 s 和一个 t，请问 s 中是否存在一个子串，包含 s 中所有字符且不包含其他字符？
 * 根据这个就知道窗口收缩的条件了，一旦窗口大于等于t中的字符数量，就应该判断是否满足结束条件，若满足则结束，否则收缩窗口。
 */

 function find_permutation(str, pattern) {
    // 1. Create a HashMap to calculate the frequencies of all characters in the pattern.
    let windowStart = 0,
      matched = 0,
      charFrequency = {};
  
    // 2. Iterate through the string, adding one character at a time in the sliding window.
    for (i = 0; i < pattern.length; i++) {
      const chr = pattern[i];
      charFrequency[chr] = (charFrequency[chr] || 0) + 1;
    }
  
    // try to extend the range [windowStart, windowEnd]
    for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      if (rightChar in charFrequency) {
        // decrement its frequency in the map
        charFrequency[rightChar] -= 1;

        // got a complete match
        if (charFrequency[rightChar] === 0) {
          matched += 1;
        }
      }
  
      // the number of characters matched is equal to the number of distinct characters in the pattern
      // we have gotten our required permutation.
      if (matched === Object.keys(charFrequency).length) {
        return true;
      }
  
      // shrink the window to make it equal to the pattern’s size
      if (windowEnd >= pattern.length - 1) {
        leftChar = str[windowStart];
        windowStart += 1;

        // if the character going out was part of the pattern
        if (leftChar in charFrequency) {
          if (charFrequency[leftChar] === 0) {
            matched -= 1;
          }

          // put it back in the frequency HashMap.
          charFrequency[leftChar] += 1;
        }
      }
    }
    return false;
  }
  
  
  console.log(`Permutation exist: ${find_permutation('oidbcaf', 'abc')}`);
  console.log(`Permutation exist: ${find_permutation('odicf', 'dc')}`);
  console.log(`Permutation exist: ${find_permutation('bcdxabcdy', 'bcdyabcdx')}`);
  console.log(`Permutation exist: ${find_permutation('aaacb', 'abc')}`);
