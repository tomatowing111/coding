/**
 * Problem: Last Stone Weight
 *
 * You are given an array of integers `stones` where stones[i] is the weight of the i-th stone.
 *
 * We are playing a game with the stones. On each turn, we choose the two heaviest stones and smash them together.
 * Suppose the heaviest two stones have weights x and y with x <= y.
 * - If x == y, both stones are destroyed.
 * - If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
 *
 * At the end of the game, there is at most one stone left.
 *
 * Return the weight of the last remaining stone. If there are no stones left, return 0.
 *
 * Example 1:
 * Input: stones = [2,7,4,1,8,1]
 * Output: 1
 * Explanation: 
 * Smash 7 and 8 → 1, so the array becomes [2,4,1,1,1]
 * Smash 2 and 4 → 2, so the array becomes [2,1,1,1]
 * Smash 2 and 1 → 1, so the array becomes [1,1,1]
 * Smash 1 and 1 → 0, so the array becomes [1]
 * The last stone has weight 1.
 *
 * Example 2:
 * Input: stones = [1]
 * Output: 1
 *
 * Constraints:
 * - 1 <= stones.length <= 30
 * - 1 <= stones[i] <= 1000
 */

export function lastStoneWeight(stones: number[]): number {
  return 0;
}
