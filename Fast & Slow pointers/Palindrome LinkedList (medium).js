/**
 * Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.
 *
 * O(N)  O(1)
 */
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function is_palindromic_linked_list(head) {
  if (head === null || head.next === null) {
    return true;
  }

  // find middle of the LinkedList 找到前半部分链表的尾节点
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  headSecondHalf = reverse(slow); // reverse the second half 反转后半部分链表
  // store the head of reversed part to revert back later
  copyHeadSecondHalf = headSecondHalf;

  // compare the first and the second half 判断是否回文
  while (head !== null && headSecondHalf !== null) {
    if (head.value !== headSecondHalf.value) {
      break; // not a palindrome
    }

    head = head.next;
    headSecondHalf = headSecondHalf.next;
  }
  reverse(copyHeadSecondHalf); // 还原链表
 
  if (head === null || headSecondHalf === null) {
    return true;
  }
  return false;
}

function reverse(head) {
  let prev = null;
  while (head !== null) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

// 2
var isPalindrome = function(head) {
  let str = '', str_re = '';
  while (head){
      str += head.val;
      str_re = head.val + str_re;
      head = head.next;
  }
  return str === str_re;
};
