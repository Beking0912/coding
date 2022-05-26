/**
 * Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.
 * O(N)  O(1)
 */
function find_middle_of_linked_list(head) {
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
