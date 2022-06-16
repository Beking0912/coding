/**
 * Given an array of ‘K’ sorted LinkedLists, merge them into one sorted list.
 *
 * https://www.bilibili.com/video/BV1X4411u7xF?spm_id_from=333.337.search-card.all.click&vd_source=e1f82f1cb6da85cc5084a283b4abe213
 * https://leetcode.cn/problems/merge-k-sorted-lists/
 * 
 * 1.新链表的下一个节点一定是k个链表头中的最小节点
 * 2.考虑选择使用最小堆
 * 
 * 解题步骤
 * 1.构建一个最小堆，并依次把链表头插入堆中
 * 2.弹出堆顶 接到输出链表，并将堆顶所在链表的新链表头插入堆中
 * 3.等堆元素全部弹出后，合并工作就完成了
 */
function merge_lists(lists) {
  const minHeap = new Heap([], null, (a, b) => b.value - a.value);

  // put the root of each list in the min heap
  lists.forEach((a) => {
    if (a !== null) {
      minHeap.push(a);
    }
  });

  // take the smallest(top) element form the min-heap and add it to the result
  // if the top element has a next element add it to the heap
  let resultHead = null,
    resultTail = null;
  while (minHeap.length > 0) {
    const node = minHeap.pop();
    if (resultHead === null) {
      resultHead = resultTail = node;
    } else {
      resultTail.next = node;
      resultTail = resultTail.next;
    }
    if (node.next !== null) {
      minHeap.push(node.next);
    }
  }

  return resultHead;
}
