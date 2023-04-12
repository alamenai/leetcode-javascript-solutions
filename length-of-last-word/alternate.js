/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
	if (s.length === 1) {
		return 1;
	}

	let count = 0;
	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] != ' ' && count >= 0) {
			count = count + 1;
		}
		if (s[i] === ' ' && count > 0) {
			break;
		}
	}
	return count;
};

console.log(lengthOfLastWord('a '));
