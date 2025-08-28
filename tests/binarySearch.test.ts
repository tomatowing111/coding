// tests/binarySearch.test.ts
import { describe, it, expect } from 'vitest';
import { binarySearch } from '../src/binarySearch';

describe('binarySearch', () => {
  it('finds target in the middle', () => {
    expect(binarySearch([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  });

  it('returns -1 when target not present', () => {
    expect(binarySearch([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
  });

  it('works with single-element array (found)', () => {
    expect(binarySearch([7], 7)).toBe(0);
  });

  it('works with single-element array (not found)', () => {
    expect(binarySearch([7], 3)).toBe(-1);
  });

  it('finds target at the beginning', () => {
    expect(binarySearch([2, 4, 6, 8], 2)).toBe(0);
  });

  it('finds target at the end', () => {
    expect(binarySearch([2, 4, 6, 8], 8)).toBe(3);
  });

  it('handles negative numbers', () => {
    expect(binarySearch([-10, -3, 0, 5, 9], -3)).toBe(1);
  });

  it('handles duplicates (returns any valid index)', () => {
    const arr = [1, 2, 2, 2, 3];
    const idx = binarySearch(arr, 2);
    expect([1, 2, 3]).toContain(idx);
  });

  it('empty array returns -1', () => {
    expect(binarySearch([], 5)).toBe(-1);
  });
});
