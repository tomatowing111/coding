/**
 * Problem: Last Stone Weight
 *
 * You are given an array of integers `stones` where stones[i] is the weight of the i-th stone.
 *
 * We are playing a game with the stones. On each turn, we choose the two heaviest stones and smash them together.
 * Suppose the heaviest two stones have weights x and y with x <= y.
 * - If x == y, both stones are destroyed.
 * - If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
 *
 * At the end of the game, there is at most one stone left.
 *
 * Return the weight of the last remaining stone. If there are no stones left, return 0.
 *
 * Example 1:
 * Input: stones = [2,7,4,1,8,1]
 * Output: 1
 * Explanation: 
 * Smash 7 and 8 → 1, so the array becomes [2,4,1,1,1]
 * Smash 2 and 4 → 2, so the array becomes [2,1,1,1]
 * Smash 2 and 1 → 1, so the array becomes [1,1,1]
 * Smash 1 and 1 → 0, so the array becomes [1]
 * The last stone has weight 1.
 *
 * Example 2:
 * Input: stones = [1]
 * Output: 1
 *
 * Constraints:
 * - 1 <= stones.length <= 30
 * - 1 <= stones[i] <= 1000
 */

class MaxHeap {
  private h: number[] = [];

  size(): number { return this.h.length; }
  peek(): number | undefined { return this.h[0]; }

  push(x: number): void {
    this.h.push(x);
    this.siftUp(this.h.length - 1);
  }

  pop(): number | undefined {
    const n = this.h.length;
    if (n === 0) return undefined;
    const top = this.h[0];
    const last = this.h.pop()!;
    if (n > 1) {
      this.h[0] = last;
      this.siftDown(0);
    }
    return top;
  }

  private siftUp(i: number): void {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.h[p] >= this.h[i]) break;
      [this.h[p], this.h[i]] = [this.h[i], this.h[p]];
      i = p;
    }
  }

  private siftDown(i: number): void {
    const n = this.h.length;
    while (true) {
      let largest = i;
      const l = (i << 1) + 1;
      const r = l + 1;
      if (l < n && this.h[l] > this.h[largest]) largest = l;
      if (r < n && this.h[r] > this.h[largest]) largest = r;
      if (largest === i) break;
      [this.h[i], this.h[largest]] = [this.h[largest], this.h[i]];
      i = largest;
    }
  }
}

export function lastStoneWeight(stones: number[]): number {
  const heap = new MaxHeap();
  for (const s of stones) heap.push(s);

  while (heap.size() > 1) {
    const y = heap.pop()!; // largest
    const x = heap.pop()!; // 2nd largest
    if (y !== x) heap.push(y - x);
  }

  return heap.peek() ?? 0;
}
