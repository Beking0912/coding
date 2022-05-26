/**
 * 确定一个数字是否是一个快乐数字的过程总是以一个循环结束
 * 使用相同的快慢指针策略来查找循环，一旦找到循环，查看循环是否卡在数字“1”上，以确定数字是否快乐。
 * 
 * https://leetcode.cn/problems/happy-number/
 * 
 * 创建一个慢指针一次走1步，创建一个快指针一次走2步。
 * 当快慢指针相遇，代表形成环路，该数不是快乐数。
 * 若指针移动过程中，找到了 1，则当前数是一个快乐数。
 */
function find_happy_number(num) {
  let slow = num;
  let fast = num;
  while (true) {
    slow = find_square_sum(slow); // move one step
    fast = find_square_sum(find_square_sum(fast)); // move two steps
    if (slow === fast) { // 快慢指针相遇
      break;
    }
  }
  return slow === 1; // 找到1则是快乐数
}

function find_square_sum(num) {
  let sum = 0;
  while (num > 0) {
    digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }
  return sum;
}

// 2
let getNext = function (n) {
    return n.toString().split('').map(i => i ** 2).reduce((a, b) => a + b);
}
let isHappy = function (n) {
    let slow = n;
    let fast = getNext(n);
    while(fast !== 1 && fast !== slow){
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }
    return fast === 1;
};
