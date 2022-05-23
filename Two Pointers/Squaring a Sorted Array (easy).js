/**
 * Given a sorted array, create a new array 
 * containing squares of all the numbers of the input array in the sorted order.
 * 
 * Time O(N)  Space O(N)
 */
 function make_squares(arr) {
    const squares = Array(arr.length).fill(0);
    let highestSquareIdx = arr.length - 1;
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      let leftSquare = arr[left] * arr[left];
      let rightSquare = arr[right] * arr[right];
      if (leftSquare > rightSquare) {
        squares[highestSquareIdx] = leftSquare;
        left++;
      } else {
        squares[highestSquareIdx] = rightSquare;
        right--;
      }
      highestSquareIdx--;
    }
  
    return squares;
  }
  