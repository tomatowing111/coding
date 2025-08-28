import { describe, it, expect } from 'vitest';
import { isValidParentheses } from '../src/isValidParentheses';

describe('isValidParentheses', () => {
  it('should return true for simple parentheses', () => {
    expect(isValidParentheses("()")).toBe(true);
  });

  it('should return true for mixed valid brackets', () => {
    expect(isValidParentheses("()[]{}")).toBe(true);
  });

  it('should return false for mismatched brackets', () => {
    expect(isValidParentheses("(]")).toBe(false);
  });

  it('should return false for wrong order', () => {
    expect(isValidParentheses("([)]")).toBe(false);
  });

  it('should return true for nested valid brackets', () => {
    expect(isValidParentheses("{[]}")).toBe(true);
  });

  it('should return false for single opening bracket', () => {
    expect(isValidParentheses("(")).toBe(false);
  });

  it('should return false for single closing bracket', () => {
    expect(isValidParentheses("]")).toBe(false);
  });

  it('should return true for empty string', () => {
    expect(isValidParentheses("")).toBe(true);
  });
});
