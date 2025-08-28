/**
 * Problem: Reverse Bits
 *
 * Reverse bits of a given 32-bit unsigned integer.
 *
 * Note:
 * - Note that in some languages such as Java, there is no unsigned integer type.
 *   In this case, both input and output will be given as a signed integer type.
 *   They should not affect your implementation, as the integer's internal binary
 *   representation is the same whether it is signed or unsigned.
 * - In JavaScript/TypeScript, numbers are represented as 64-bit floating-point values,
 *   but bitwise operations treat them as 32-bit signed integers.
 *
 * Example 1:
 * Input: n = 00000010100101000001111010011100
 * Output:    964176192 (00111001011110000010100101000000)
 *
 * Example 2:
 * Input: n = 11111111111111111111111111111101
 * Output:   3221225471 (10111111111111111111111111111111)
 *
 * Constraints:
 * - The input must be a binary string of length 32 or a number within the 32-bit range.
 *
 * Follow up:
 * If this function is called many times, how would you optimize it?
 */

export function reverseBits(n: number): number {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result <<= 1;
    result |= (n & 1);
    n >>>= 1; // unsigned right shift
  }
  return result >>> 0; // ensure unsigned 32-bit
}
