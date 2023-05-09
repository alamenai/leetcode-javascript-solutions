/**LINK: https://leetcode.com/problems/filter-elements-from-array/ */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
	let filteredArr = [];

	for (let index = 0; index < arr.length; index++) {
		if (fn(arr[index], index)) {
			filteredArr.push(arr[index]);
		}
	}
	return filteredArr;
};
