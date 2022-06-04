/**
 * For a given number ‘N’, write a function to generate all combination of ‘N’ pairs of balanced parentheses.
 * 
 * https://leetcode.cn/problems/generate-parentheses/solution/shou-hua-tu-jie-gua-hao-sheng-cheng-hui-su-suan-fa/
 * O(4^/sqrt{n})  O(N*2^N)
 */
class ParenthesesString {
  constructor(str, openCount, closeCount) {
    this.str = str;
    this.openCount = openCount;
    this.closeCount = closeCount;
  }
}

function generate_valid_parentheses(num) {
  const queue = new Deque();
  queue.push(new ParenthesesString("", 0, 0));

  const result = [];
  while (queue.length > 0) {
    const ps = queue.shift();
    if (ps.openCount === num && ps.closeCount === num) {
      result.push(ps.str);
    } else {
      if (ps.openCount < num) {
        queue.push(new ParenthesesString(`${ps.str}(`, ps.openCount + 1, ps.closeCount));
      }
      if (ps.openCount > ps.closeCount) {
        queue.push(new ParenthesesString(`${ps.str})`, ps.openCount, ps.closeCount + 1));
      }
    }
  }
  return result;
}

// 2
// 剩余左括号总数要小于等于右括号 递归把所有符合要求的加上去
const res = [];
function generateParenthesis(n) {
  if (n <= 0) {
    return res;
  }
  getParenthesis("", n, n);
  return res;
}

function getParenthesis(str, left, right) {
  if (left === 0 && right === 0) {
    res.add(str);
    return;
  }
  if (left == right) { // 剩余左右括号数相等，下一个只能用左括号
    getParenthesis(str + "(", left - 1, right);
  } else if (left < right) { // 剩余左括号小于右括号，下一个可以用左括号也可以用右括号
    if (left > 0) {
      getParenthesis(str + "(", left - 1, right);
    }
    getParenthesis(str + ")", left, right - 1);
  }
}

// 3
var generateParenthesis = function (n) {
  const res = [];

  const dfs = (left, right, str) => { // 左右括号所剩的数量，str是当前构建的字符串
    if (str.length == 2 * n) { // 字符串构建完成
      res.push(str); // 加入解集
      return; // 结束当前递归分支
    }
    if (left > 0) { // 只要左括号有剩，就可以选它，然后继续做选择（递归）
      dfs(left - 1, right, str + "(");
    }
    if (left < right) { // 右括号比左括号剩的多，才能选右括号
      dfs(left, right - 1, str + ")"); // 然后继续做选择（递归）
    }
  };

  dfs(n, n, ""); // 递归的入口，剩余数量都是n，初始字符串是空串
  return res;
};
  