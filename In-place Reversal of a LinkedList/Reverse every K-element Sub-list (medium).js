/**
 * Given the head of a LinkedList and a number âkâ, reverse every âkâ sized sub-list starting from the head.
 * O(N)  O(1)
 * https://leetcode.cn/problems/reverse-nodes-in-k-group/
 */

function reverse_every_k_elements(head, k) {
  if (k <= 1 || head === null) {
    return head;
  }

  let current = head;
  let previous = null;
  while (true) {
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
      i += 1;
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
     * diff
     */
    if (current === null) {
      break;
    }
    previous = last_node_of_sub_list;
  }
  return head;
}
