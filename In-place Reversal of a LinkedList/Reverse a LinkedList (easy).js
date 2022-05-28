/**
 * Given the head of a Singly LinkedList, reverse the LinkedList.
 * Write a function to return the new head of the reversed LinkedList.
 * https://leetcode.cn/problems/reverse-linked-list/
 *
 * O(N) O(1)
 */
function reverse(head) {
  let current = head;
  let previous = null;
  while (current !== null) {
    next = current.next; // temporarily store the next node
    current.next = previous; // reverse the current node
    previous = current; // before we move to the next node, point previous to the current node
    current = next; // move on the next node
  }
  return previous;
}
