// tests/minCostClimbingStairs.test.ts
import { describe, it, expect } from 'vitest';
import { minCostClimbingStairs } from '../src/minCostClimbingStairs';

describe('minCostClimbingStairs', () => {
  it('matches example: [10,15,20] -> 15', () => {
    expect(minCostClimbingStairs([10, 15, 20])).toBe(15);
  });

  it('matches example: [1,100,1,1,1,100,1,1,100,1] -> 6', () => {
    expect(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])).toBe(6);
  });

  it('handles zeros', () => {
    expect(minCostClimbingStairs([0, 0, 0, 0])).toBe(0);
  });

  it('handles two steps (choose cheaper single hop)', () => {
    expect(minCostClimbingStairs([5, 1])).toBe(1);
  });

  it('handles single step (edge case)', () => {
    expect(minCostClimbingStairs([7])).toBe(7);
  });

  it('handles empty cost (edge case)', () => {
    expect(minCostClimbingStairs([])).toBe(0);
  });

  it('works with larger values', () => {
    expect(minCostClimbingStairs([1000, 1, 1000, 1, 1000, 1, 1, 1])).toBe(4);
  });
});
