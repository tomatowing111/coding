import { describe, it, expect } from 'vitest';
import { isAnagram } from '../src/validAnagram';

describe('isAnagram', () => {
  it('returns true for simple anagram', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
  });

  it('returns false for different length strings', () => {
    expect(isAnagram('rat', 'carp')).toBe(false);
  });

  it('returns false when letters differ', () => {
    expect(isAnagram('rat', 'car')).toBe(false);
  });

  it('returns true for anagrams with repeated letters', () => {
    expect(isAnagram('aabbcc', 'baccab')).toBe(true);
  });

  it('works with single character strings', () => {
    expect(isAnagram('a', 'a')).toBe(true);
    expect(isAnagram('a', 'b')).toBe(false);
  });

  it('works with empty strings', () => {
    expect(isAnagram('', '')).toBe(true);
  });

  it('is case sensitive', () => {
    expect(isAnagram('aA', 'Aa')).toBe(true);
    expect(isAnagram('aA', 'aa')).toBe(false);
  });
});
