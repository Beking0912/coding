/**
 * Given a string and a pattern, find the smallest substring in the given string 
 * which has all the character occurrences of the given pattern.
 */
 function find_substring(str, pattern) {
    let start = 0,
      matched = 0,
      substrStart = 0,
      minLength = str.length + 1,
      charFrequency = {};

    // 统计需要的字符和对应的数量
    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }

    // 增大窗口
    for (let end = 0; end < str.length; end++) {
        const right = str[end];
        // 判断当前进入窗口的字符是否是需要的字符 如果是则更新window中的对应情况
        if (right in charFrequency) {
            charFrequency[right]--;
            // 若window中的这个字符数量已经满足需求 合法的字符数量matched增加1
            if (charFrequency[right] >= 0) {
                matched++;
            }
        }

        // 合法的字符数量 == 需要的字符个数 满足收缩窗口的条件
        while (matched === pattern.length) {
            // 更新结果 优化可行解
            if (minLength > end - start + 1) {
                minLength = end - start + 1;
                substrStart = start;
            }
            
            const left = str[start];
            // 缩小窗口
            start++;
            if (left in charFrequency) {
                if (charFrequency[left] === 0) {
                    matched--;
                }
                charFrequency[left]++
            }
        }
    }

    if (minLength > str.length) return '';
    return str.substring(substrStart, substrStart + minLength);
  }
