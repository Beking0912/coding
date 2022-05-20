/**
 * Given a string and a list of words, 
 * find all the starting indices of substrings in the given string 
 * that are a concatenation of all the given words exactly once without any overlapping of words. 
 * It is given that all words are of the same length.
 */
 function find_word_concatenation(str, words) {
    if (words.length === 0 || words[0].length === 0) {
      return [];
    }
  
    // 存储words的单词和个数
    const wordFrequency = {};
    words.forEach((word) => {
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });
  
    const resultIndices = [];
    const wordsCount = words.length;
    const wordLength = words[0].length;
  
    // 主逻辑
    for (i = 0; i < (str.length - wordsCount * wordLength) + 1; i++) {
      // 子字符 查找的中间结果
      const wordsSeen = {};
      // 子字符串查找逻辑 每次移动的步长为单个单词的长度
      for (j = 0; j < wordsCount; j++) {
        // 获取子串
        const next_word_index = i + j * wordLength;
        word = str.substring(next_word_index, next_word_index + wordLength);
        // 子串 不在 words 里面
        if (!(word in wordFrequency)) {
          break;
        }
  
        // 临时记录子串
        wordsSeen[word] = (wordsSeen[word] || 0) + 1;

        // 子串个数 比 words 多
        if (wordsSeen[word] > (wordFrequency[word] || 0)) {
          break;
        }
  
        // 完全匹配
        if (j + 1 === wordsCount) {
          resultIndices.push(i);
        }
      }
    }
  
    return resultIndices;
  }
  
  console.log(find_word_concatenation('catfoxcat', ['cat', 'fox']));
  console.log(find_word_concatenation('catcatfoxfox', ['cat', 'fox']));
