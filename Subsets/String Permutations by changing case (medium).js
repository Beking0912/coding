/**
 * Given a string, find all of its permutations preserving the character sequence but changing case.
 *
 * O(N∗2^N)  O(N∗2^N)
 * https://leetcode.cn/problems/letter-case-permutation/
 */
function find_letter_case_string_permutations(str) {
  const permutations = [];
  permutations.push(str);
  for (i = 0; i < str.length; i++) {
    if (isNaN(parseInt(str[i], 10))) {
      const n = permutations.length;
      for (j = 0; j < n; j++) {
        const chs = permutations[j].split("");
        chs[i] = chs[i] === chs[i].toLowerCase() ? chs[i].toUpperCase() : chs[i].toLowerCase();
        permutations.push(chs.join(""));
      }
    }
  }
  return permutations;
}
