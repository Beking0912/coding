/**
 * 任务调度器
 * https://leetcode.cn/problems/task-scheduler/
 *
 * https://leetcode.cn/problems/task-scheduler/solution/ju-zhen-tan-xin-suan-fa-6xing-dai-ma-2ji-on60/
 * 一个宽为 n+1 的矩阵， 如果需要执行 maxExec 次的任务的数量为 maxCount，
 * 先「假设」一定有 maxCount≤n+1，那么类似地可以得到对应的总时间为：(maxExec−1)(n+1)+maxCount
 * 需要的最少时间就是 (maxExec−1)(n+1)+maxCount 和 ∣task∣ 中的较大值
 */

/**
 * 假设数组 ["A","A","A","B","B","C"]，n = 2，A的频率最高，记为count = 3，
 * 所以两个A之间必须间隔2个任务，才能满足题意并且是最短时间（两个A的间隔大于2的总时间必然不是最短），
 * 因此执行顺序为： A->X->X->A->X->X->A，
 * 这里的X表示除了A以外其他字母，或者是待命，不用关心具体是什么，反正用来填充两个A的间隔的。
 * 
 * 上面执行顺序的规律是：有count - 1个A，其中每个A需要搭配n个X，再加上最后一个A，
 * 所以总时间为 (count - 1) * (n + 1) + 1
 * 要注意可能会出现多个频率相同且都是最高的任务，比如 ["A","A","A","B","B","B","C","C"]，
 * 所以最后会剩下一个A和一个B，因此最后要加上频率最高的不同任务的个数 maxCount
 * 公式算出的值可能会比数组的长度小，如["A","A","B","B"]，n = 0，此时要取数组的长度
 */
 var leastInterval = function (tasks, n) {
   const freq = _.countBy(tasks);

   const maxExec = Math.max(...Object.values(freq)); // 最多的执行次数
   let maxCount = 0; // 具有最多执行次数的任务数量
   Object.values(freq).forEach((v) => {
     if (v === maxExec) {
       maxCount++;
     }
   });

   return Math.max((maxExec - 1) * (n + 1) + maxCount, tasks.length);
 };

// 大写字母 的 Unicode编码 - 65转0 - 25索引
// while代替forEach，16位无符号整数数组默认0，范围0 - 65535
// 总时间 = (A个数 - 1) * （冷却时间 + 1 ） + 1
var leastInterval = function (tasks, n) {
  if (n === 0) return tasks.length;

  let maxCount = 0, h = new Uint16Array(26);
  let i = -1;
  while (++i < tasks.length) {
    h[(t = tasks[i].charCodeAt() - 65)]++;
  }

  h.sort((a, b) => b - a);
  while (h[maxCount + 1] === h[maxCount++]) {}

  return Math.max((h[0] - 1) * (n + 1) + maxCount, i);
};

// 2
var leastInterval = function (tasks, n) {
  const map = new Map();
  for (let i = 0; i < tasks.length; i++) { // 遍历计算所有任务出现的次数
    if (map.has(tasks[i])) {
      map.set(tasks[i], map.get(tasks[i]) + 1);
    } else {
      map.set(tasks[i], 1);
    }
  }
  let arr = [...map.values()].sort((a, b) => b - a); // 对次数进行递减排序
  let maxNum = arr[0];
  let res = (maxNum - 1) * (n + 1) + 1;
  let i = 1;
  while (i < arr.length && arr[i] === maxNum) { // 如果存在其他任务的出现次数跟最大次数相同
    res++;
    i++;
  }
  return Math.max(tasks.length, res);
};

// 3
function schedule_tasks(tasks, k) {
  let intervalCount = 0, taskFrequencyMap = {};
  tasks.forEach((chr) => {
    taskFrequencyMap[chr] = (taskFrequencyMap[chr] || 0) + 1;
  });

  const maxHeap = new Heap([], null, (a, b) => a[0] - b[0]);
  Object.keys(taskFrequencyMap).forEach((char) => {
    maxHeap.push([taskFrequencyMap[char], char]);
  });

  while (maxHeap.length > 0) {
    const waitList = [];
    let n = k + 1; // try to execute as many as 'k+1' tasks from the max-heap
    while (n > 0 && maxHeap.length > 0) {
      intervalCount++;
      const [frequency, char] = maxHeap.pop();
      if (frequency > 1) {
        waitList.push([frequency - 1, char]); // decrement the frequency and add to the waitList
      }
      n -= 1;
    }

    // put all the waiting list back on the heap
    waitList.forEach((task) => maxHeap.push(task));

    if (maxHeap.length > 0) {
      intervalCount += n; // we'll be having 'n' idle intervals for the next iteration
    }
  }
  return intervalCount;
}
