/**
 * Given the head of a LinkedList and a number ‘k’, reverse every alternating ‘k’ sized sub-list starting from the head.
 *  
 * O(N)  O(1)
 */
function reverse_alternate_k_elements(head, k) {
  if (k <= 1 || head === null) {
    return head;
  }

  let current = head;
  let previous = null;
  while (current !== null) {
    const last_node_of_previous_part = previous;
    const last_node_of_sub_list = current;
    let next = null;

    // reverse 'k' nodes
    let i = 0;
    while (current !== null && i < k) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
      i++;
    }

    // connect with the previous part
    if (last_node_of_previous_part !== null) {
      last_node_of_previous_part.next = previous;
    } else {
      head = previous;
    }

    // connect with the next part
    last_node_of_sub_list.next = current;

    /**
     * diff: skip 'k' nodes
     */
    i = 0;
    while (current !== null && i < k) {
      previous = current;
      current = current.next;
      i++;
    }
  }
  return head;
}
