/**
 * Problem: Valid Anagram
 *
 * Given two strings `s` and `t`, return true if `t` is an anagram of `s`,
 * and false otherwise.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word
 * or phrase, typically using all the original letters exactly once.
 *
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 *
 * Constraints:
 * - 1 <= s.length, t.length <= 5 * 10^4
 * - s and t consist of lowercase English letters.
 *
 * Follow up:
 * What if the inputs contain Unicode characters? 
 * How would you adapt your solution to such a case?
 */
export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const count = new Map<string, number>();

  // Count characters in s
  for (const ch of s) {
    count.set(ch, (count.get(ch) || 0) + 1);
  }

  // Subtract counts using t
  for (const ch of t) {
    if (!count.has(ch)) return false;
    count.set(ch, count.get(ch)! - 1);
    if (count.get(ch)! < 0) return false;
  }

  return true;
}
