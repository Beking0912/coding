/**
 * Given ‘N’ ropes with different lengths, we need to connect these ropes into one big rope with minimum cost.
 * The cost of connecting two ropes is equal to the sum of their lengths.
 * 
 * O(N*logN)  O(N)
 */
function minimum_cost_to_connect_ropes(ropeLengths) {
  const minHeap = new Heap(ropeLengths, null, (a, b) => b - a);

  let result = 0;
  while (minHeap.length > 1) {
    const temp = minHeap.pop() + minHeap.pop();
    result += temp;
    minHeap.push(temp);
  }

  return result;
}
