/**LINK: https://leetcode.com/problems/array-reduce-transformation/ */

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
	if (nums.length === 0) return init;
	let val = init;
	for (let e of nums) {
		val = fn(val, e);
	}
	return val;
};
