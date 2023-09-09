/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
	for (let i = 0; i < nums.length - 1; i++) {
		for (let nextIndex = i + 1; nextIndex < nums.length; nextIndex++) {
			if (target === nums[i] + nums[nextIndex]) {
				return [i, nextIndex];
			}
		}
	}
};

console.log(twoSum([3, 2, 4], 6)); // [0,1]
