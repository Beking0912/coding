/**
 * Given a word, write a function to generate all of its unique generalized abbreviations.
 * 
 * O(N*2^N) O(N*2^N)
 */
class AbbreviatedWord {
  constructor(str, start, count) {
    this.str = str;
    this.start = start;
    this.count = count;
  }
}

function generate_generalized_abbreviation(word) {
  const result = [];
  const queue = [];
  queue.push(new AbbreviatedWord("", 0, 0));
  while (queue.length > 0) {
    const abWord = queue.shift();
    if (abWord.start === word.length) {
      if (abWord.count !== 0) {
        abWord.str += abWord.count;
      }
      result.push(abWord.str);
    } else {
      queue.push(new AbbreviatedWord(abWord.str, abWord.start + 1, abWord.count + 1));

      if (abWord.count !== 0) {
        abWord.str += abWord.count;
      }

      let newWord = abWord.str + word[abWord.start];
      queue.push(new AbbreviatedWord(newWord, abWord.start + 1, 0));
    }
  }
  return result;
}

// 2
function generate_generalized_abbreviation(word) {
  const result = [];
  generate_abbreviation_recursive(word, "", 0, 0, result);
  return result;
}

function generate_abbreviation_recursive(word, abWord, start, count, result) {
  if (start === word.length) {
    if (count !== 0) {
      abWord += count;
    }
    result.push(abWord);
  } else {
    generate_abbreviation_recursive(word, abWord, start + 1, count + 1, result);

    if (count !== 0) {
      abWord += count;
    }
    const newWord = abWord + word[start];
    generate_abbreviation_recursive(word, newWord, start + 1, 0, result);
  }
}
