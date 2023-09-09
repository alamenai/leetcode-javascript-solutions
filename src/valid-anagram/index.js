/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	if (s.length !== t.length) {
		return false;
	}

	let freq = new Map();

	for (let index = 0; index < s.length; index++) {
		freq.set(s[index], (freq.get(s[index]) || 0) + 1);
		freq.set(t[index], (freq.get(t[index]) || 0) - 1);
	}

	for (const [key, value] of freq) {
		if (value !== 0) return false;
	}

	return true;
};
