/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
	let ans = [];
	for (let index = 0; index < nums.length; index++) {
		ans[index] = nums[nums[index]];
	}
	return ans;
};
