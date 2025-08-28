// tests/mergeTwoLists.test.ts
import { describe, it, expect } from 'vitest';
import { ListNode, mergeTwoLists } from '../src/mergeTwoLists';

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

describe('mergeTwoLists', () => {
  it('merges two non-empty lists', () => {
    const list1 = buildList([1, 2, 4]);
    const list2 = buildList([1, 3, 4]);
    const merged = mergeTwoLists(list1, list2);
    expect(listToArray(merged)).toEqual([1, 1, 2, 3, 4, 4]);
  });

  it('returns the non-empty list if one is null', () => {
    const list1 = buildList([1, 2, 3]);
    const merged = mergeTwoLists(list1, null);
    expect(listToArray(merged)).toEqual([1, 2, 3]);
  });

  it('returns null if both lists are null', () => {
    const merged = mergeTwoLists(null, null);
    expect(listToArray(merged)).toEqual([]);
  });

  it('merges when lists have different lengths', () => {
    const list1 = buildList([1, 5, 7]);
    const list2 = buildList([2, 3, 4, 8, 9]);
    const merged = mergeTwoLists(list1, list2);
    expect(listToArray(merged)).toEqual([1, 2, 3, 4, 5, 7, 8, 9]);
  });

  it('handles duplicates correctly', () => {
    const list1 = buildList([2, 2, 2]);
    const list2 = buildList([2, 2]);
    const merged = mergeTwoLists(list1, list2);
    expect(listToArray(merged)).toEqual([2, 2, 2, 2, 2]);
  });
});
