// tests/lastStoneWeight.test.ts
import { describe, it, expect } from 'vitest';
import { lastStoneWeight } from '../src/lastStoneWeight';

describe('lastStoneWeight', () => {
  it('matches the classic example', () => {
    expect(lastStoneWeight([2, 7, 4, 1, 8, 1])).toBe(1);
  });

  it('returns 0 for empty array', () => {
    expect(lastStoneWeight([])).toBe(0);
  });

  it('returns the single stone when only one exists', () => {
    expect(lastStoneWeight([5])).toBe(5);
  });

  it('destroys both when two equal stones', () => {
    expect(lastStoneWeight([1, 1])).toBe(0);
  });

  it('handles duplicates and different sizes', () => {
    expect(lastStoneWeight([10, 4, 2, 10])).toBe(2);
  });

  it('odd count with same values leaves one', () => {
    expect(lastStoneWeight([3, 3, 3])).toBe(3);
  });

  it('mix that ends in zero', () => {
    expect(lastStoneWeight([9, 3, 2, 10])).toBe(0);
  });
});
