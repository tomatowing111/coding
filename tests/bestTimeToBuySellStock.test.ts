import { describe, it, expect } from 'vitest';
import { maxProfit } from '../src/bestTimeToBuySellStock';

describe('maxProfit (Best Time to Buy and Sell Stock I)', () => {
  it('classic example', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5); // buy 1, sell 6
  });

  it('monotonically decreasing -> zero profit', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  it('monotonically increasing', () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
  });

  it('handles equal prices (no gain)', () => {
    expect(maxProfit([2, 2, 2, 2])).toBe(0);
  });

  it('handles zeros and later rise', () => {
    expect(maxProfit([0, 0, 3, 1, 4])).toBe(4); // buy 0, sell 4
  });

  it('non-trivial valley then peak', () => {
    expect(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])).toBe(4); // buy 0, sell 4
  });

  it('single element -> zero', () => {
    expect(maxProfit([5])).toBe(0);
  });

  it('empty array -> zero', () => {
    expect(maxProfit([])).toBe(0);
  });

  it('performance: long increasing array', () => {
    const n = 10000;
    const arr = Array.from({ length: n }, (_, i) => i); // [0..9999]
    expect(maxProfit(arr)).toBe(n - 1);
  });
});
