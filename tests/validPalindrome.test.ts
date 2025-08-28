import { describe, it, expect } from 'vitest';
import { isValidPalindrome } from '../src/validPalindrome';

describe('isValidPalindrome', () => {
  it('classic positive: "A man, a plan, a canal: Panama"', () => {
    expect(isValidPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  it('classic negative: "race a car"', () => {
    expect(isValidPalindrome('race a car')).toBe(false);
  });

  it('empty string is palindrome', () => {
    expect(isValidPalindrome('')).toBe(true);
  });

  it('string with only punctuation', () => {
    expect(isValidPalindrome('.,,,:;!!')).toBe(true);
  });

  it('single character', () => {
    expect(isValidPalindrome('a')).toBe(true);
  });

  it('even length palindrome', () => {
    expect(isValidPalindrome('abba')).toBe(true);
  });

  it('odd length palindrome', () => {
    expect(isValidPalindrome('abcba')).toBe(true);
  });

  it('case insensitivity', () => {
    expect(isValidPalindrome('Aa')).toBe(true);
    expect(isValidPalindrome('aBba')).toBe(true);
  });

  it('handles numbers', () => {
    expect(isValidPalindrome('1221')).toBe(true);
    expect(isValidPalindrome('10,01')).toBe(true);
  });

  it('edge case with letters and numbers mixed', () => {
    expect(isValidPalindrome('1a2A1')).toBe(true);
    expect(isValidPalindrome('1a2b1')).toBe(false);
  });

  it('non-palindrome due to mismatch after filtering', () => {
    expect(isValidPalindrome('0P')).toBe(false);
  });

  it('long input with spaces and punctuation', () => {
    const s = 'Was it a car or a cat I saw?';
    expect(isValidPalindrome(s)).toBe(true);
  });
});
