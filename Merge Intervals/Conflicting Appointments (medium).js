/**
 * Given an array of intervals representing āNā appointments,
 * find out if a person can attend all the appointments.
 * 
 *  O(N * logN)  O(N)
 */
function can_attend_all_appointments(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }
  return true;
}
