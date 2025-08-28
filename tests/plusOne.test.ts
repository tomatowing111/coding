// tests/plusOne.test.ts
import { describe, it, expect } from 'vitest';
import { plusOne } from '../src/plusOne';

describe('plusOne', () => {
  it('increments a simple number', () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  });

  it('handles carry over in the last digit', () => {
    expect(plusOne([1, 2, 9])).toEqual([1, 3, 0]);
  });

  it('handles multiple carries', () => {
    expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
  });

  it('handles single digit 9', () => {
    expect(plusOne([9])).toEqual([1, 0]);
  });

  it('handles single digit non-9', () => {
    expect(plusOne([7])).toEqual([8]);
  });

  it('works with leading zeros (though unusual)', () => {
    expect(plusOne([0, 0, 1])).toEqual([0, 0, 2]);
  });
});
