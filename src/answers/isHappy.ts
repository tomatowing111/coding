/**
 * Problem: Happy Number
 *
 * Write an algorithm to determine if a number `n` is a happy number.
 *
 * A happy number is defined by the following process:
 * - Starting with any positive integer, replace the number by the sum of the squares of its digits.
 * - Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
 * - Those numbers for which this process ends in 1 are happy numbers.
 *
 * Return true if n is a happy number, and false if not.
 *
 * Example 1:
 * Input: n = 19
 * Output: true
 * Explanation:
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 *
 * Example 2:
 * Input: n = 2
 * Output: false
 *
 * Constraints:
 * - 1 <= n <= 2^31 - 1
 */
function sumOfSquares(n: number): number {
  let s = 0;
  while (n > 0) {
    const d = n % 10;
    s += d * d;
    n = Math.floor(n / 10);
  }
  return s;
}

export function isHappy(n: number): boolean {
  if (n <= 0) return false; // happy number is defined for positive integers

  let slow = n;
  let fast = sumOfSquares(n);

  while (fast !== 1 && slow !== fast) {
    slow = sumOfSquares(slow);
    fast = sumOfSquares(sumOfSquares(fast));
  }

  return fast === 1;
}
