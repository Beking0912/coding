/**
 * Given an array of points in a 2D plane, find ‘K’ closest points to the origin.
 * https://leetcode.cn/problems/k-closest-points-to-origin/
 * 
 * O(N∗logK) O(N)
 */
function find_closest_points(points, k) {
  const maxHeap = new Heap([], null, (a, b) => compare(a, b));
  for (i = 0; i < k; i++) {
    maxHeap.push(points[i]);
  }

  for (i = k; i < points.length; i++) {
    if (distance_from_origin(points[i]) < distance_from_origin(maxHeap.peek())) {
      maxHeap.pop();
      maxHeap.push(points[i]);
    }
  }
  return maxHeap.toArray();
}

const distance_from_origin = ([x, y]) => x * x + y * y;
const compare = (a, b) => distance_from_origin(a) - distance_from_origin(b);

// 2
return points.sort((a, b) => a[0] * a[0] + a[1] * a[1] - b[0] * b[0] - b[1] * b[1]).slice(0, K);
