
1. Single Number (easy) 只出现一次的数字
2. **Two Single Numbers (medium) 只出现一次的数字 III**
3. **Complement of Base 10 Number (medium) 十进制整数的反码**

```javascript
/**
 * O(n) O(1)
 * While finding the sum of numbers from 1 to n, we can get integer overflow when n is large.
 */
function find_missing_number(arr) {
  const n = arr.length + 1;
  // find sum of all numbers from 1 to n.
  let s1 = 0;
  for (let i = 1; i <= n; i++)
    s1 += i;

  // subtract all numbers in input from sum.
  arr.forEach((num) => {
    s1 -= num;
  });

  // s1, now, is the missing number
  return s1;
}

/**
 * O(n) O(1)
 * we will not have any integer overflow problem.
 */
function find_missing_number(arr) {
  const n = arr.length + 1;
  // x1 represents XOR of all values from 1 to n
  // find sum of all numbers from 1 to n.
  let x1 = 1;
  for (let i = 2; i <= n; i++)
    x1 = x1 ^ i;

  // x2 represents XOR of all values in arr
  let x2 = arr[0];
  for (let i = 1; i < n-1; i++)
    x2 = x2 ^ arr[i];

  // missing number is the xor of x1 and x2
  return x1 ^ x2;
}
```
