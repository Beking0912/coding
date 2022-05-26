/**
 * Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.
 * https://leetcode.cn/problems/linked-list-cycle/
 *
 * O(N)  O(1)
 *
 * 条件：while (fast !== null && fast.next !== null)
 */
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function has_cycle(head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}

/**
 * Problem 1: Given the head of a LinkedList with a cycle, find the length of the cycle.
 */
function find_cycle_length(head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      return calculate_cycle_length(slow);
    }
  }
  return 0;
}

function calculate_cycle_length(slow) {
  let current = slow;
  let cycle_length = 0;
  while (true) {
    current = current.next;
    cycle_length++;
    if (current === slow) { // 再次到达slow
      break;
    }
  }
  return cycle_length;
}
