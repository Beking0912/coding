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



// 优先队列
var mergeKLists = function(lists) {
    const head = new ListNode(0);
    const minHeap = new MinHeap();

    let p = head;
    // 插入k个升序链表的头部节点
    lists.forEach(l => {
        if(l) minHeap.insert(l);
    })
    // 不断的地比较最小堆中k个节点的大小
    while(minHeap.size()) {
        const node = minHeap.pop(); // 弹出堆顶
        p.next = node; // 接到输出链表
        p = p.next;
        if(node.next) minHeap.insert(node.next); // 将堆顶所在链表的新链表头插入堆中
    }
    return head.next;
};



// 分治
var mergeKLists = function(lists) {
    return merge(lists, 0, lists.length - 1);
}
var merge = function(lists, left, right) {
    if (left == right) {
        return lists[left];
    }
    if (left > right) {
        return null;
    }
    const mid = (left + right) >> 1;
    return mergeTwoLists(merge(lists, left, mid), merge(lists, mid + 1, right));
}



// 顺序合并
var mergeKLists = function(lists) {
  let temp = null;
  for (let i = 0; i < lists.length; i++) {
    temp = mergeTwoLists(temp, lists[i]);
  }
  return temp;
};
var mergeTwoLists = function(l1, l2) {
    const prehead = new ListNode(-1);

    let prev = prehead;
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }

    prev.next = l1 === null ? l2 : l1;
    return prehead.next;
};



// 暴力排序 创建链表
var mergeKLists = function(lists) {
    function transform(l, arr) {
        while(l) {
            arr.push(l.val);
            l = l.next;
        }
    }

    let arr = [];
    let res = new ListNode(null);

    lists.map(item => transform(item, arr));
    arr.sort((a, b) => a - b);
    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = new ListNode(null);
        res.val = arr[i];
        temp.next = res;
        res = temp;
    }

    return res.next;
};
