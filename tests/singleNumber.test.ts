// tests/singleNumber.test.ts
import { describe, it, expect } from 'vitest';
import { singleNumber } from '../src/singleNumber';

describe('singleNumber', () => {
  it('finds the single number in small array', () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
  });

  it('works with negatives', () => {
    expect(singleNumber([-1, -1, -2])).toBe(-2);
  });

  it('works with larger input', () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
  });

  it('works with only one element', () => {
    expect(singleNumber([99])).toBe(99);
  });

  it('works with mixed positive and negative numbers', () => {
    expect(singleNumber([-3, -3, 5, 5, 7])).toBe(7);
  });

  it('works with zero included', () => {
    expect(singleNumber([0, 1, 1])).toBe(0);
  });
});
