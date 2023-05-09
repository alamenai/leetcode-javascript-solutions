/** LINK: https://leetcode.com/problems/array-prototype-last */

Array.prototype.last = () => {
	const array = this;
	const length = array.length;
	const lastElement = array[length - 1];
	return lastElement ?? -1;
};
