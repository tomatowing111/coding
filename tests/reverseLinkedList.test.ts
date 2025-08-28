// tests/reverseLinkedList.test.ts
import { describe, it, expect } from 'vitest';
import { ListNode, reverseLinkedList } from '../src/reverseLinkedList';

function buildList(values: number[]): ListNode | null {
  let dummy = new ListNode(0);
  let curr = dummy;
  for (const v of values) {
    curr.next = new ListNode(v);
    curr = curr.next;
  }
  return dummy.next;
}

function listToArray(head: ListNode | null): number[] {
  const res: number[] = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  return res;
}

describe('reverseLinkedList', () => {
  it('reverses a list of multiple nodes', () => {
    const head = buildList([1, 2, 3, 4, 5]);
    const newHead = reverseLinkedList(head);
    expect(listToArray(newHead)).toEqual([5, 4, 3, 2, 1]);
  });

  it('reverses a list with two nodes', () => {
    const head = buildList([1, 2]);
    const newHead = reverseLinkedList(head);
    expect(listToArray(newHead)).toEqual([2, 1]);
  });

  it('returns same single node', () => {
    const head = buildList([42]);
    const newHead = reverseLinkedList(head);
    expect(listToArray(newHead)).toEqual([42]);
  });

  it('returns null for empty list', () => {
    const newHead = reverseLinkedList(null);
    expect(listToArray(newHead)).toEqual([]);
  });
});
