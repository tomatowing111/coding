import { describe, it, expect } from 'vitest';
import { canAttendMeetings } from '../src/meetingRooms';

describe('canAttendMeetings - extra cases', () => {
  it('returns true for chain of touching intervals', () => {
    expect(canAttendMeetings([[0, 1], [1, 2], [2, 3], [3, 4]])).toBe(true);
  });

  it('returns false for identical duplicate intervals', () => {
    expect(canAttendMeetings([[1, 3], [1, 3]])).toBe(false);
  });

  it('returns false when an interval is fully nested inside another', () => {
    expect(canAttendMeetings([[1, 10], [2, 3]])).toBe(false);
  });

  it('handles zero-length meetings (start === end) correctly', () => {
    // zero-length between two touching intervals -> OK
    expect(canAttendMeetings([[1, 2], [2, 2], [2, 3]])).toBe(true);

    // zero-length inside an ongoing meeting -> NOT OK
    expect(canAttendMeetings([[1, 5], [3, 3]])).toBe(false);
  });

  it('supports floating point times', () => {
    expect(canAttendMeetings([[0, 1.5], [1.5, 2.5]])).toBe(true);
    expect(canAttendMeetings([[0, 1.5], [1.49, 2]])).toBe(false);
  });

  it('works with negative times', () => {
    expect(canAttendMeetings([[-10, -5], [-5, 0]])).toBe(true);
    expect(canAttendMeetings([[-10, -1], [-5, 0]])).toBe(false);
  });

  it('large numeric ranges', () => {
    expect(canAttendMeetings([[0, Number.MAX_SAFE_INTEGER]])).toBe(true);
    expect(canAttendMeetings([[0, Number.MAX_SAFE_INTEGER], [1, 2]])).toBe(false);
  });

  it('detects overlap when only a tiny gap is missing', () => {
    expect(canAttendMeetings([[10, 20], [19, 30]])).toBe(false);
  });

  it('multiple overlaps scattered', () => {
    expect(
      canAttendMeetings([
        [0, 10],
        [11, 12],
        [12, 15],
        [14, 18], // overlaps with [12, 15]
        [20, 25],
      ])
    ).toBe(false);
  });

  it('unsorted with many touching and non-touching intervals', () => {
    expect(
      canAttendMeetings([
        [30, 40],
        [0, 10],
        [10, 10], // zero-length touching
        [20, 25],
        [10, 20],
        [25, 30],
      ])
    ).toBe(true);
  });

  it('overlap when same start different ends', () => {
    expect(canAttendMeetings([[5, 8], [5, 7]])).toBe(false);
  });

  it('returns true when all intervals are zero-length but non-overlapping by start time', () => {
    expect(canAttendMeetings([[1, 1], [2, 2], [3, 3]])).toBe(true);
  });

  it('returns false when zero-length intervals share the same start inside another interval', () => {
    expect(canAttendMeetings([[1, 4], [2, 2], [3, 3]])).toBe(false);
  });
});
