/**
 * For a given number ‘N’, write a function to generate all combination of ‘N’ pairs of balanced parentheses.
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
