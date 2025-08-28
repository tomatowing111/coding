// tests/reverseBits.test.ts
import { describe, it, expect } from 'vitest';
import { reverseBits } from '../src/reverseBits';

describe('reverseBits', () => {
  it('reverses example input', () => {
    const input = 0b00000010100101000001111010011100;
    const expected = 0b00111001011110000010100101000000;
    expect(reverseBits(input)).toBe(expected >>> 0);
  });

  it('reverses all ones', () => {
    const input = 0xFFFFFFFF; // 32 ones
    expect(reverseBits(input)).toBe(0xFFFFFFFF);
  });

  it('reverses single 1 at LSB', () => {
    const input = 1; // ...0001
    const expected = 0x80000000; // 1 at MSB
    expect(reverseBits(input)).toBe(expected >>> 0);
  });

  it('reverses single 1 at MSB', () => {
    const input = 0x80000000;
    const expected = 1;
    expect(reverseBits(input)).toBe(expected);
  });

  it('reverses zero', () => {
    expect(reverseBits(0)).toBe(0);
  });
});
