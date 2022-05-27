/**
 * For ‘K’ employees, we are given a list of intervals representing the working hours of each employee.
 * Our goal is to find out if there is a free interval that is common to all employees.
 * You can assume that each list of employee working hours is sorted on the start time.
 * 
 * O(N*logK)  O(K)
 */
const Heap = require("./collections/heap"); //http://www.collectionsjs.com

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

class EmployeeInterval {
  constructor(interval, employeeIndex, intervalIndex) {
    this.interval = interval; // interval representing employee's working hours
    this.employeeIndex = employeeIndex; // index of the list containing working hours of this employee
    this.intervalIndex = intervalIndex; // index of the interval in the employee list
  }
}

/**
 * 将所有人的所有interval加入一个以start time排序的minHeap，先弹出一个，记为temp
 * 比较temp.end和minHeap.peek().start的大小关系。若两者没有交集，则发现了一个gap，将其加入结果集
 * 若没有交集，则temp.end = Math.max(temp.end, minHeap.peek().end)
 */
function find_employee_free_time(schedule) {
  let result = [];
  if (schedule === null || schedule.length === 0) {
    return result;
  }

  // 将所有人的所有interval加入一个以start time排序的minHeap
  minHeap = new Heap([], null, (a, b) => b.interval.start - a.interval.start);
  for (i = 0; i < schedule.length; i++) {
    minHeap.push(new EmployeeInterval(schedule[i][0], i, 0));
  }

  // 先弹出一个记为previousInterval
  let previousInterval = minHeap.peek().interval;
  while (minHeap.length > 0) {
    const queueTop = minHeap.pop();
    // 比较previousInterval.end和minHeap.peek().start的大小关系
    if (previousInterval.end < queueTop.interval.start) {
      // 两者没有交集，则发现了一个gap，将其加入结果集
      result.push(new Interval(previousInterval.end, queueTop.interval.start));
      previousInterval = queueTop.interval;
    } else {
      // 没有交集，则previousInterval.end = Math.max(previousInterval.end, minHeap.peek().end)
      if (previousInterval.end < queueTop.interval.end) {
        previousInterval = queueTop.interval;
      }
    }

    const employeeSchedule = schedule[queueTop.employeeIndex];
    if (employeeSchedule.length > queueTop.intervalIndex + 1) {
      minHeap.push(new EmployeeInterval(employeeSchedule[queueTop.intervalIndex + 1], queueTop.employeeIndex, queueTop.intervalIndex + 1));
    }
  }
  return result;
}
