/**
 * We are given a list of Jobs. Each job has a Start time, an End time, and a CPU load
 * when it is running. Our goal is to find the maximum CPU load at any time
 * if all the jobs are running on the same machine.
 *
 * [ start, end, cpuLoad ]
 */
const Heap = require("./collections/heap"); //http://www.collectionsjs.com

class Job {
  constructor(start, end, cpuLoad) {
    this.start = start;
    this.end = end;
    this.cpuLoad = cpuLoad;
  }
}

function find_max_cpu_load(jobs) {
  jobs.sort((a, b) => a.start - b.start);

  let maxCPULoad = 0;
  let currentCPULoad = 0; // here
  const minHeap = new Heap([], null, (a, b) => b.end - a.end);

  for (j = 0; j < jobs.length; j++) {
    while (minHeap.length > 0 && jobs[j].start >= minHeap.peek().end) {
      currentCPULoad -= minHeap.pop().cpuLoad; // remove all the jobs that have ended
    }
    minHeap.push(jobs[j]); // add the current job into min_heap
    currentCPULoad += jobs[j].cpuLoad; // here
    maxCPULoad = Math.max(maxCPULoad, currentCPULoad);
  }
  return maxCPULoad;
}
