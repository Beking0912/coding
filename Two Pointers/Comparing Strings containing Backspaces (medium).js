/**
 * Given two strings containing backspaces (identified by the character ‘#’),
 * check if the two strings are equal.
 *
 * O(M+N)  O(1)
 * 
 * https://leetcode.cn/problems/backspace-string-compare/solution/bi-jiao-han-tui-ge-de-zi-fu-chuan-by-leetcode-solu/
 * 一个字符是否会被删掉，只取决于该字符后面的退格符，而与该字符前面的退格符无关。
 * 因此当我们逆序地遍历字符串，就可以立即确定当前字符是否会被删掉。
 * 
 * 若该字符为退格符，则需要多删除一个普通字符，skip++；
 * 若该字符为普通字符：
 *   若 skip 为 0，则说明当前字符不需要删去；
 *   若 skip 不为 0，则说明当前字符需要删去，skip--。
 */
function backspace_compare(str1, str2) {
  // use two pointer approach to compare the strings
  let index1 = str1.length - 1;
  let index2 = str2.length - 1;
  while (index1 >= 0 || index2 >= 0) {
    let i1 = get_next_valid_char_index(str1, index1);
    let i2 = get_next_valid_char_index(str2, index2);
    if (i1 < 0 && i2 < 0) {
      return true;
    }
    if (i1 < 0 || i2 < 0) {
      return false;
    }
    if (str1[i1] !== str2[i2]) {
      return false;
    }

    index1 = i1 - 1;
    index2 = i2 - 1;
  }
  return true;
}

function get_next_valid_char_index(str, index) {
  let backspaceCount = 0;
  while (index >= 0) {
    if (str[index] === "#") {
      backspaceCount++;
    } else if (backspaceCount > 0) {
      backspaceCount--;
    } else {
      break;
    }

    index--; // skip a backspace or a valid character
  }
  return index;
}
