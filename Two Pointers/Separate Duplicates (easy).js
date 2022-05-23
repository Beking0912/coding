/**
 * Given an array of sorted numbers, separate all duplicates from it in-place. 
 * You should not use any extra space; 
 * move all duplicates at the end of the array and after moving return the length of the subarray 
 * that has no duplicate in it.
 * 
 * Time O(N)  Space O(1)
 */
 function remove_duplicates(arr) {
    let nextNonDuplicate = 1;
    let i = 0;
    while (i < arr.length) {
      if (arr[nextNonDuplicate - 1] !== arr[i]) {
        arr[nextNonDuplicate] = arr[i];
        nextNonDuplicate += 1;
      }
      i += 1;
    }


    /**
     * for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[nextNonDuplicate - 1]) {
          arr[nextNonDuplicate] = arr[i];
          nextNonDuplicate++;
        }
      }
     */
    return nextNonDuplicate;
  }

/**
  * Given an unsorted array of numbers and a target ‘key’, 
  * remove all instances of ‘key’ in-place and return the new length of the array.
  * 
  * Time O(N)  Space O(1)
  */
  function remove_element(arr, key) {
    let nextElement = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] !== key) {
        arr[nextElement] = arr[i];
        nextElement += 1;
      }
    }
    return nextElement;
  }
