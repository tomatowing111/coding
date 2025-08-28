import { describe, it, expect } from 'vitest';
import { containsDuplicate } from '../src/containsDuplicate';

describe('containsDuplicate', () => {
  it('returns true when duplicates exist', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  it('returns false when all elements are unique', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });

  it('works with negative numbers', () => {
    expect(containsDuplicate([-1, -2, -3, -1])).toBe(true);
    expect(containsDuplicate([-1, -2, -3])).toBe(false);
  });

  it('works with large input', () => {
    const arr = Array.from({ length: 100000 }, (_, i) => i);
    expect(containsDuplicate(arr)).toBe(false);
    arr.push(99999); // duplicate at the end
    expect(containsDuplicate(arr)).toBe(true);
  });

  it('handles empty array', () => {
    expect(containsDuplicate([])).toBe(false);
  });

  it('handles single element array', () => {
    expect(containsDuplicate([42])).toBe(false);
  });
});
