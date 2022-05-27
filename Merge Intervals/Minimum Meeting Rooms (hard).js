/**
 * Given a list of intervals representing the start and end time of ‘N’ meetings,
 * find the minimum number of rooms required to hold all the meetings.
 * 
 * O(N*logN)  O(N)
 */
function min_meeting_rooms(meetings) {
  meetings.sort((a, b) => a[0] - b[0]);

  let minRooms = 0;
  let minHeap = new Heap([], null, (a, b) => b[1] - a[1]); // 创建一个最小堆来存储所有活动的会议
  for (i = 0; i < meetings.length; i++) {
    while (minHeap.length > 0 && meetings[i][0] >= minHeap.peek()[1]) {
      minHeap.pop(); // remove all the meetings that have ended
    }
    minHeap.push(meetings[i]); // add the current meeting into min_heap
    minRooms = Math.max(minRooms, minHeap.length); // all active meetings are in the min_heap, so we need rooms for all of them.
  }
  return minRooms;
}
