import { twoSum } from '../src/twoSum';

describe('twoSum', () => {
  it('finds indices when present', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it('works with duplicates', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it('returns empty when none', () => {
    expect(twoSum([1, 2, 3], 7)).toEqual([]);
  });

  // --- Additional edge cases ---

  it('handles empty array', () => {
    expect(twoSum([], 5)).toEqual([]);
  });

  it('handles single element array', () => {
    expect(twoSum([5], 5)).toEqual([]);
  });

  it('works with negative numbers', () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
  });

  it('handles large numbers correctly', () => {
    expect(twoSum([1000000, 500, 499500], 500000)).toEqual([1, 2]);
  });

  it('returns a valid pair when multiple answers exist', () => {
    const result = twoSum([1, 2, 3, 4], 5);
    // Could be [0,3] or [1,2], both are valid
    expect(
      (result[0] === 0 && result[1] === 3) ||
      (result[0] === 1 && result[1] === 2)
    ).toBe(true);
  });
});
