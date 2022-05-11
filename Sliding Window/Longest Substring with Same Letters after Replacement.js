/**
 * Given a string with lowercase letters only, 
 * if you are allowed to replace no more than k letters with any letter, 
 * find the length of the longest substring having the same letters after replacement.
 */

 const length_of_longest_substring = function(str, k) {
    let start = 0,
      maxLength = 0,
      maxRepeatLetterCount = 0,
      frequencyMap = {};
  
    for (let end = 0; end < str.length; end++) {
      const right = str[end];
      frequencyMap[right] = (frequencyMap[right] || 0) + 1;
      maxRepeatLetterCount = Math.max(maxRepeatLetterCount, frequencyMap[right]);
  
      if (end - start + 1 - maxRepeatLetterCount > k) {
        const left = str[start];
        frequencyMap[left]--;
        start++;
      }
      maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
  };
  