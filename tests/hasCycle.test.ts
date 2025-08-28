// tests/hasCycle.test.ts
import { describe, it, expect } from 'vitest';
import { ListNode, hasCycle } from '../src/hasCycle';

function buildList(values: number[], pos: number): ListNode | null {
  let dummy = new ListNode(0);
  let curr = dummy;
  let cycleNode: ListNode | null = null;

  values.forEach((v, i) => {
    curr.next = new ListNode(v);
    curr = curr.next;
    if (i === pos) cycleNode = curr;
  });

  if (cycleNode) {
    curr.next = cycleNode;
  }

  return dummy.next;
}

describe('hasCycle', () => {
  it('detects cycle in middle', () => {
    const head = buildList([3, 2, 0, -4], 1);
    expect(hasCycle(head)).toBe(true);
  });

  it('detects cycle at head', () => {
    const head = buildList([1, 2], 0);
    expect(hasCycle(head)).toBe(true);
  });

  it('detects no cycle in single node list', () => {
    const head = buildList([1], -1);
    expect(hasCycle(head)).toBe(false);
  });

  it('detects no cycle in multiple node list', () => {
    const head = buildList([1, 2, 3, 4], -1);
    expect(hasCycle(head)).toBe(false);
  });

  it('detects no cycle in empty list', () => {
    expect(hasCycle(null)).toBe(false);
  });
});
