/**
 * Given the head of a Singly LinkedList that contains a cycle,
 * write a function to find the starting node of the cycle.
 *
 * 找到第一个入环节点：快指针走两步慢指针走一步，当两者第一次相遇时，快指针回到第一个节点处。
 * 快慢指针都一次走一步，两者第一次相遇处就是第一个入环节点。
 */
function find_cycle_start(head) {
  let cycle_length = 0;
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) { // 快慢指针第一次相遇
      cycle_length = calculate_cycle_length(slow); // 循环的长度
      break;
    }
  }
  return find_start(head, cycle_length);
}

function calculate_cycle_length(slow) {
  let current = slow;
  let cycle_length = 0;
  while (true) {
    current = current.next;
    cycle_length++;
    if (current === slow) { // slow绕一圈
      break;
    }
  }
  return cycle_length;
}

function find_start(head, cycle_length) {
  let pointer1 = head;
  let pointer2 = head;
  while (cycle_length > 0) { // 快指针先走cycle_length步
    pointer2 = pointer2.next;
    cycle_length--;
  }

  while (pointer1 !== pointer2) { // 快慢指针同时走 直到相遇
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  return pointer1;
}
