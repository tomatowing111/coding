/**
 * Problem: Binary Search
 *
 * Given a sorted array of integers `nums` and an integer `target`,
 * return the index of `target` if it exists in `nums`. Otherwise, return -1.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example 1:
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4.
 *
 * Example 2:
 * Input: nums = [-1,0,3,5,9,12], target = 2
 * Output: -1
 * Explanation: 2 does not exist in nums so return -1.
 *
 * Constraints:
 * - 1 <= nums.length <= 10^4
 * - -10^4 < nums[i], target < 10^4
 * - All the integers in nums are unique.
 * - nums is sorted in ascending order.
 */
export function binarySearch(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

function binarySearchRe(nums: number[], target: number): number {
  function search(left: number, right: number): number {
    if (left > right) return -1
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] == target) {
      return mid
    } else if (target < nums[mid]) {
      return search(left, mid - 1)
    } else {
      return search(mid + 1, right)
    }
  }
  return search(0, nums.length - 1)
}