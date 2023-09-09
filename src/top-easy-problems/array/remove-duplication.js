/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	let duplicate = nums[0];

	for (let index = 1; index < nums.length; index++) {
		if (nums[index] === duplicate) {
			nums[index] = undefined;
		} else {
			duplicate = nums[index];
		}
	}
	const result = nums
		.sort((a, b) => a - b)
		.filter((v) => v != undefined).length;

	return [result];
};

const nums = [1, 1, 2];
console.log(removeDuplicates(nums));
