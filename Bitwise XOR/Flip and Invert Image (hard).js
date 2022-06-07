/**
 * Given a binary matrix representing an image, we want to flip the image horizontally, then invert it.
 *
 * Flip: flip the image in place by replacing ith element from left with the ith element from the right.
 * Invert: take XOR of each element with 1. If it is 1 then it will become 0 and if it is 0 then it will become 1.
 * 
 * O(n) O(1)
 */
function flip_and_invert_image(matrix) {
  const C = matrix.length;
  for (let row = 0; row < C; ++row) {
    for (let col = 0; col < Math.floor((C + 1) / 2); ++col) {
      const tmp = matrix[row][col] ^ 1;
      matrix[row][col] = matrix[row][C - 1 - col] ^ 1;
      matrix[row][C - 1 - col] = tmp;
    }
  }
  return matrix;
}
