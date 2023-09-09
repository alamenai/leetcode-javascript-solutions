/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
	if (s.length > t.length) return false;
	if (s === t) return true;
	let stack = '';
	let pt = 0;
	for (let i = 0; i < t.length; i++) {
		if (t[i] === s[pt]) {
			stack += t[i];
			pt++;
		}
	}
	return stack === s;
};

console.log(isSubsequence('abc', 'ahcgdb'));
