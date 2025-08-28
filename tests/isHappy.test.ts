// tests/isHappy.test.ts
import { describe, it, expect } from 'vitest';
import { isHappy } from '../src/isHappy';

describe('isHappy', () => {
  it('returns true for 19 (classic example)', () => {
    expect(isHappy(19)).toBe(true);
  });

  it('returns false for 2', () => {
    expect(isHappy(2)).toBe(false);
  });

  it('returns true for 1', () => {
    expect(isHappy(1)).toBe(true);
  });

  it('handles larger happy number', () => {
    expect(isHappy(100)).toBe(true); // 100 -> 1^2 + 0^2 + 0^2 = 1
  });

  it('handles larger unhappy number', () => {
    expect(isHappy(116)).toBe(false);
  });

  it('edge cases: non-positive integers are not happy', () => {
    expect(isHappy(0)).toBe(false);
    expect(isHappy(-7)).toBe(false);
  });

  it('multiple checks are consistent', () => {
    expect(isHappy(7)).toBe(true);
    expect(isHappy(8)).toBe(false);
    expect(isHappy(10)).toBe(true);
  });
});
