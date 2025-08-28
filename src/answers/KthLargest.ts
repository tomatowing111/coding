/**
 * Problem: Kth Largest Element in a Stream
 *
 * Design a class to find the kth largest element in a stream. Note that it is the kth largest
 * element in the sorted order, not the kth distinct element.
 *
 * Implement the KthLargest class:
 *
 * - KthLargest(int k, int[] nums): Initializes the object with the integer k and the stream of integers nums.
 * - int add(int val): Appends the integer val to the stream and returns the element representing
 *   the kth largest element in the stream.
 *
 * Example 1:
 * Input:
 * ["KthLargest", "add", "add", "add", "add", "add"]
 * [[3, [4,5,8,2]], [3], [5], [10], [9], [4]]
 *
 * Output:
 * [null, 4, 5, 5, 8, 8]
 *
 * Explanation:
 * KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
 * kthLargest.add(3);   // return 4
 * kthLargest.add(5);   // return 5
 * kthLargest.add(10);  // return 5
 * kthLargest.add(9);   // return 8
 * kthLargest.add(4);   // return 8
 *
 * Constraints:
 * - 1 <= k <= 10^4
 * - 0 <= nums.length <= 10^4
 * - -10^4 <= nums[i] <= 10^4
 * - -10^4 <= val <= 10^4
 * - At most 10^4 calls will be made to add.
 * - It is guaranteed that there will be at least k elements in the array when you search for the kth element.
 */

export class KthLargest {
  private k: number;
  private heap: number[] = []; // min-heap of size at most k

  constructor(k: number, nums: number[]) {
    this.k = k;
    for (const n of nums) this.add(n);
  }

  add(val: number): number {
    this.push(val);
    if (this.heap.length > this.k) this.pop();
    return this.peek()!; // if heap.size < k, returns smallest so far
  }

  // ---- Min-heap helpers ----
  private peek(): number | undefined {
    return this.heap[0];
  }

  private push(val: number): void {
    this.heap.push(val);
    this.siftUp(this.heap.length - 1);
  }

  private pop(): number | undefined {
    const h = this.heap;
    if (h.length === 0) return undefined;
    const top = h[0];
    const last = h.pop()!;
    if (h.length) {
      h[0] = last;
      this.siftDown(0);
    }
    return top;
  }

  private siftUp(i: number): void {
    const h = this.heap;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (h[p] <= h[i]) break;
      [h[p], h[i]] = [h[i], h[p]];
      i = p;
    }
  }

  private siftDown(i: number): void {
    const h = this.heap;
    const n = h.length;
    while (true) {
      let smallest = i;
      const l = (i << 1) + 1;
      const r = l + 1;
      if (l < n && h[l] < h[smallest]) smallest = l;
      if (r < n && h[r] < h[smallest]) smallest = r;
      if (smallest === i) break;
      [h[i], h[smallest]] = [h[smallest], h[i]];
      i = smallest;
    }
  }
}
