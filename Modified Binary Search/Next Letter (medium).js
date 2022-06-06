/**
 * Given an array of lowercase letters sorted in ascending order,
 * find the smallest letter in the given array greater than a given ‘key’.
 *
 */
function search_next_letter(letters, key) {
  let start = 0;
  let end = letters.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (key < letters[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return letters[start % letters.length];
}
