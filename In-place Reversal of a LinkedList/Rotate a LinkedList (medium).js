/**
 * Given the head of a Singly LinkedList and a number ‘k’, rotate the LinkedList to the right by ‘k’ nodes.
 * https://leetcode.cn/problems/rotate-list/
 * O(N)  O(1)
 */
function rotate(head, rotations) {
  if (head === null || head.next === null || rotations <= 0) {
    return head;
  }

  // 原来的尾结点指向原来的头结点，形成环
  let last_node = head;
  let list_length = 1;
  while (last_node.next !== null) {
    last_node = last_node.next;
    list_length++;
  }
  last_node.next = head;

  // 找到断开环的位置
  rotations %= list_length;
  const skip_length = list_length - rotations;
  let last_node_of_rotated_list = head;
  for (i = 0; i < skip_length - 1; i++) {
    last_node_of_rotated_list = last_node_of_rotated_list.next;
  }

  // 新的头结点指向断开环的位置
  head = last_node_of_rotated_list.next;
  last_node_of_rotated_list.next = null;
  return head;
}
