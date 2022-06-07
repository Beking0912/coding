/**
 * In a non-empty array of numbers, every number appears exactly twice except two numbers that appear only once.
 * Find the two numbers that appear only once.
 *
 * https://leetcode.cn/problems/single-number-iii/
 * 
 * 1. 先异或一遍到最后得到一个数，得到的肯定是a^b的值
 * 2. 取异或值最后一个二进制位为 1 的数字作为 rightmost_set_bit，如果是 1 则表示两个数字在这一位上不同
 * 3. 通过与这个 rightmost_set_bit 进行与操作，分为 为0 和 为1 两个数组
 * 4. 该位为0的进行异或求解得到其中一个结果a，该位为1的进行异或求解得到另一个结果b。
 */
function find_single_numbers(nums) {
    let n1xn2 = 0;
    nums.forEach((num) => {
      n1xn2 ^= num;
    });
  
    let rightmost_set_bit = 1;
    while ((rightmost_set_bit & n1xn2) === 0) {
      rightmost_set_bit = rightmost_set_bit << 1;
    }
    
    let num1 = 0;
    let num2 = 0;
    nums.forEach((num) => {
      if ((num & rightmost_set_bit) !== 0) // the bit is set
        num1 ^= num;
      else // the bit is not set
        num2 ^= num;
    });
    return [num1, num2];
  }
 