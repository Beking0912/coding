/**
 * Given the head of a LinkedList and two positions ‘p’ and ‘q’,
 * reverse the LinkedList from position ‘p’ to ‘q’.
 * 
 * O(N)  O(1)
 * 
 * https://leetcode.cn/problems/reverse-linked-list-ii
 */
function reverse_sub_list(head, p, q) {
  if (p === q) {
    return head;
  }

  // 1. Skip the first p-1 nodes, to reach the node at position p.
  let current = head;
  let previous = null;
  let i = 0;
  while (current !== null && i < p - 1) {
    previous = current;
    current = current.next;
    i++;
  }

  // 2. Remember the node at position p-1 to be used later to connect with the reversed sub-list.
  const last_node_of_first_part = previous;
  const last_node_of_sub_list = current;
  let next = null;

  // 3. reverse the nodes from p to q using the same approach discussed in Reverse a LinkedList.
  i = 0;
  while (current !== null && i < q - p + 1) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
    i++;
  }

  if (last_node_of_first_part !== null) {
    last_node_of_first_part.next = previous;
  } else {
    head = previous;
  }

  // 4. Connect the p-1 and q+1 nodes to the reversed sub-list.
  last_node_of_sub_list.next = current;
  return head;
}
