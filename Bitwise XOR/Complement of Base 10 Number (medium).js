/**
 * For a given positive number N in base-10,
 * return the complement of its binary representation as a base-10 integer.
 * 
 * O(b)  O(1)
 *
 * https://leetcode.cn/problems/complement-of-base-10-integer/
 */
function calculate_bitwise_complement(num) {
  if (num === 0) return 1;

  let bit_count = 0;
  let n = num;
  while (n > 0) {
    bit_count++;
    n = n >> 1;
  }

  let all_bits_set = Math.pow(2, bit_count) - 1;
  return num ^ all_bits_set;
}

// 2
// 将num与位数相同、全为1的数进行异或操作。
const bitwiseComplement = (num) => {
  const len = num.toString(2).length; // 计算num二进制数的长度
  const str = new Array(len).fill(1).join(""); // 构造长度为len、全为1的字符串
  const N = parseInt(str, 2); // 转化为二进制数
  return N ^ num;
};
