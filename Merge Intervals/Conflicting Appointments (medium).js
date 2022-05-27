/**
 * Given an array of intervals representing ‘N’ appointments,
 * find out if a person can attend all the appointments.
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
