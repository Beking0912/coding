/**
 * https://leetcode.cn/problems/ipo/
 *
 * https://imgbb.com/WtHGH2Q
 * 
 * O(N*logN+K*logN)  O(N)
 * 
 * 1. 将所有项目资金添加到一个最小堆中 => 就可以选择一个资金需求最小的项目
 * 2. 浏览最小堆的top项目并过滤可以在可用资金内完成的项目。
 *    将所有这些项目的利润放入一个最大堆中，这样我们就可以选择一个利润最大的项目。
 * 3. 最后选择投资 maxHeap.top
 * 4. 对所需数量重复第 2 步和第 3 步。
 */
function find_maximum_capital(capital, profits, counts, initialCapital) {
  const minCapitalHeap = new Heap([], null, (a, b) => b[0] - a[0]); // 为了得到成本最小的项目
  const maxProfitHeap = new Heap([], null, (a, b) => a[0] - b[0]); // 为了得到利润最大的项目

  // 将所有成本添加到一个最小堆中
  for (i = 0; i < profits.length; i++) {
    minCapitalHeap.push([capital[i], i]);
  }

  let availableCapital = initialCapital;
  for (i = 0; i < counts; i++) {
    // 浏览最小堆的top项目并过滤可以在成本内完成的项目
    while (minCapitalHeap.length > 0 && minCapitalHeap.peek()[0] <= availableCapital) {
      // 将所有利润放入一个最大堆中
      const [capital, index] = minCapitalHeap.pop();
      maxProfitHeap.push([profits[index], index]);
    }

    if (maxProfitHeap.length === 0) break;
    // 选择投资 maxHeap.top
    availableCapital += maxProfitHeap.pop()[0];
  }
  return availableCapital;
}
