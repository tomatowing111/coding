/**
 * Problem: Min Cost Climbing Stairs
 *
 * You are given an integer array `cost` where cost[i] is the cost of the i-th step on a staircase.
 * Once you pay the cost, you can either climb one or two steps.
 *
 * You can either start from step 0 or step 1.
 *
 * Return the minimum cost to reach the top of the floor.
 *
 * Example 1:
 * Input: cost = [10,15,20]
 * Output: 15
 * Explanation: Cheapest is to start at cost[1], pay 15, and climb two steps to the top.
 *
 * Example 2:
 * Input: cost = [1,100,1,1,1,100,1,1,100,1]
 * Output: 6
 * Explanation: Cheapest is start at cost[0], and only step on 1s, skipping 100s.
 *
 * Constraints:
 * - 2 <= cost.length <= 1000
 * - 0 <= cost[i] <= 999
 */

// You can start at step 0 or 1. Cost is paid when you land on a step.
// Answer is the min cost to reach "top" (one step beyond the last index).
export function minCostClimbingStairs(cost: number[]): number {
  const n = cost.length;
  if (n === 0) return 0;
  if (n === 1) return cost[0];

  // prev2 = dp[i-2], prev1 = dp[i-1]; dp[i] = min(prev1 + cost[i-1], prev2 + cost[i-2])
  let prev2 = 0; // cost to stand before index 0 (virtual start)
  let prev1 = 0; // cost to stand before index 1 (can start at 0 or 1 for free)

  for (let i = 2; i <= n; i++) {
    const cur = Math.min(prev1 + cost[i - 1], prev2 + cost[i - 2]);
    prev2 = prev1;
    prev1 = cur;
  }
  return prev1;
}
