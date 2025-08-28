// tests/countBits.test.ts
import { describe, it, expect } from 'vitest';
import { countBits } from '../src/countBits';

describe('countBits', () => {
  it('handles n = 0', () => {
    expect(countBits(0)).toEqual([0]);
  });

  it('handles n = 1', () => {
    expect(countBits(1)).toEqual([0, 1]);
  });

  it('handles n = 2', () => {
    expect(countBits(2)).toEqual([0, 1, 1]);
  });

  it('handles n = 5', () => {
    expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
  });

  it('handles larger n', () => {
    expect(countBits(10)).toEqual([0,1,1,2,1,2,2,3,1,2,2]);
  });
});
