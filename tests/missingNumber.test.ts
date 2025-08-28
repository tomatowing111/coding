// tests/missingNumber.test.ts
import { describe, it, expect } from 'vitest';
import { missingNumber } from '../src/missingNumber';

describe('missingNumber', () => {
  it('handles missing in the middle', () => {
    expect(missingNumber([3, 0, 1])).toBe(2);
  });

  it('handles missing zero', () => {
    expect(missingNumber([1, 2])).toBe(0); // n=2, nums=[1,2]
  });

  it('handles missing n', () => {
    expect(missingNumber([0, 1])).toBe(2); // n=2, nums=[0,1]
  });

  it('works with larger input', () => {
    expect(missingNumber([9,6,4,2,3,5,7,0,1])).toBe(8);
  });

  it('handles empty array (n=0)', () => {
    expect(missingNumber([])).toBe(0);
  });

  it('works with unsorted arrays', () => {
    expect(missingNumber([2, 5, 3, 0, 1])).toBe(4);
  });
});
