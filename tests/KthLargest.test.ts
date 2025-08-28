// tests/KthLargest.test.ts
import { describe, it, expect } from 'vitest';
import { KthLargest } from '../src/KthLargest';

describe('KthLargest', () => {
  it('matches the LeetCode example', () => {
    const kth = new KthLargest(3, [4, 5, 8, 2]);
    expect(kth.add(3)).toBe(4);   // [4,5,8]
    expect(kth.add(5)).toBe(5);   // [5,5,8]
    expect(kth.add(10)).toBe(5);  // [5,8,10]
    expect(kth.add(9)).toBe(8);   // [8,9,10]
    expect(kth.add(4)).toBe(8);   // [8,9,10]
  });

  it('works when k = 1 (tracks the max)', () => {
    const kth = new KthLargest(1, [2, 1, 3]);
    expect(kth.add(0)).toBe(3);
    expect(kth.add(10)).toBe(10);
    expect(kth.add(5)).toBe(10);
  });

  it('handles duplicates correctly', () => {
    const kth = new KthLargest(2, [5, 5, 5]);
    expect(kth.add(5)).toBe(5);
    expect(kth.add(6)).toBe(5);
    expect(kth.add(7)).toBe(6);
  });

  it('works with negatives and mixed numbers', () => {
    const kth = new KthLargest(3, [-10, -5, 0, 2]);
    expect(kth.add(-3)).toBe(-3); // third largest among [-10,-5,-3,0,2] is -3
    expect(kth.add(100)).toBe(0); // third largest among [...,100] is 0
    expect(kth.add(-1)).toBe(0);
  });

  it('supports empty initial list', () => {
    const kth = new KthLargest(2, []);
    expect(kth.add(1)).toBe(1);   // only 1 element so far → kth = 1
    expect(kth.add(2)).toBe(1);   // now [1,2], kth = 1
    expect(kth.add(3)).toBe(2);   // [2,3], kth = 2
  });

});
