/**
 * Given a string and a pattern, find all anagrams of the pattern in the given string.
 */
 function find_string_anagrams(str, pattern) {
    let windowStart = 0,
      matched = 0,
      charFrequency = {};
  
    for (i = 0; i < pattern.length; i++) {
      const chr = pattern[i];
      charFrequency[chr] = (charFrequency[chr] || 0) + 1;
    }
  
    const resultIndices = [];
    // our goal is to match all the characters from the 'charFrequency' with the current window
    // try to extend the range [windowStart, windowEnd]
    for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      if (rightChar in charFrequency) {
        // decrement the frequency of matched character
        charFrequency[rightChar] -= 1;
        if (charFrequency[rightChar] === 0) {
          matched += 1;
        }
      }
  
      if (matched === Object.keys(charFrequency).length) { // have we found an anagram?
        resultIndices.push(windowStart);
      }
  
      // shrink the sliding window
      if (windowEnd >= pattern.length - 1) {
        leftChar = str[windowStart];
        windowStart += 1;
        if (leftChar in charFrequency) {
          if (charFrequency[leftChar] === 0) {
            matched -= 1; // before putting the character back, decrement the matched count
          }
          charFrequency[leftChar] += 1; // put the character back
        }
      }
    }
  
    return resultIndices;
  }
  
  
  console.log(find_string_anagrams('ppqp', 'pq'));
  console.log(find_string_anagrams('abbcabc', 'abc'));
