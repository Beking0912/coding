# 使用二分法的前提条件
数组为有序数组，同时数组中无重复元素，因为一旦有重复元素，使用二分查找法返回的元素下标可能不是唯一的。
// 循环二分法
```javascript
function cycle_dichotomy(arr, value) {
  let start = 0, end = arr.length - 1, midIndex;
  while (start <= end) {
    midIndex = Math.floor((end + start) / 2);
    if (arr[midIndex] == value) {
      return midIndex;
    } else if(arr[midIndex] > value) {
      end = midIndex - 1;
    } else {
      start = midIndex + 1;
    }
  }
  return -1;
}
```

// 递归二分法
```javascript
function recursive_dichotomy(arr, value, start, end) {
  if (start <= end) {
    let midIndex = Math.floor((start + end) / 2);
    if (arr[midIndex] == value) {
      return midIndex;
    } else if(arr[midIndex] > value) {
      return recursive_dichotomy(arr,value,start,midIndex - 1);
    } else {
      return recursive_dichotomy(arr,value,midIndex + 1,end);
    }
  }
  return -1;
}
```

1. Order-agnostic Binary Search (easy)
2. **Ceiling of a Number (medium) 搜索插入位置**
3. **Next Letter (medium) 寻找比目标字母大的最小字母**
4. **Number Range (medium)**
5. **Search in a Sorted Infinite Array (medium)**
6. Minimum Difference Element (medium)
7. **Bitonic Array Maximum (easy)**
8. Search Bitonic Array (medium)
9. **Search in Rotated Array (medium) 搜索旋转排序数组**
10. **Rotation Count (medium)**
