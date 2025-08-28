// tests/climbStairs.test.ts
import { describe, it, expect } from 'vitest';
import { climbStairs } from '../src/climbStairs';

describe('climbStairs', () => {
  it('handles n = 1', () => {
    expect(climbStairs(1)).toBe(1);
  });

  it('handles n = 2', () => {
    expect(climbStairs(2)).toBe(2);
  });

  it('handles n = 3', () => {
    expect(climbStairs(3)).toBe(3);
  });

  it('handles n = 4', () => {
    expect(climbStairs(4)).toBe(5);
  });

  it('handles n = 5', () => {
    expect(climbStairs(5)).toBe(8);
  });

  it('handles larger n', () => {
    expect(climbStairs(10)).toBe(89);
  });
});
