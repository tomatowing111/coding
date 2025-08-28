/**
 * Problem: Number of 1 Bits (Hamming Weight)
 *
 * Write a function that takes an unsigned integer and returns
 * the number of '1' bits it has (also known as the Hamming weight).
 *
 * Example 1:
 * Input: n = 11  (binary: 00000000000000000000000000001011)
 * Output: 3
 * Explanation: The binary representation of 11 has three 1's.
 *
 * Example 2:
 * Input: n = 128 (binary: 00000000000000000000000010000000)
 * Output: 1
 * Explanation: The binary representation of 128 has one 1.
 *
 * Example 3:
 * Input: n = 4294967293 (binary: 11111111111111111111111111111101)
 * Output: 31
 *
 * Constraints:
 * - The input must be a binary string of length 32 or
 *   an unsigned integer within the 32-bit range.
 *
 * Follow up:
 * If this function is called many times, how would you optimize it?
 */
export function hammingWeight(n: number): number {
  let count = 0;
  while (n !== 0) {
    count++;
    n &= (n - 1); // drop the lowest set bit
  }
  return count;
}
