// tests/hammingWeight.test.ts
import { describe, it, expect } from 'vitest';
import { hammingWeight } from '../src/hammingWeight';

describe('hammingWeight', () => {
  it('counts bits in small number', () => {
    expect(hammingWeight(11)).toBe(3); // 1011
  });

  it('counts single bit', () => {
    expect(hammingWeight(128)).toBe(1); // 10000000
  });

  it('counts zero correctly', () => {
    expect(hammingWeight(0)).toBe(0);
  });

  it('handles max 32-bit unsigned integer', () => {
    expect(hammingWeight(0xFFFFFFFF)).toBe(32);
  });

  it('works with random numbers', () => {
    expect(hammingWeight(5)).toBe(2); // 101
    expect(hammingWeight(7)).toBe(3); // 111
    expect(hammingWeight(9)).toBe(2); // 1001
  });
});
