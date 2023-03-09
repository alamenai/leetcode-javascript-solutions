/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
 

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	// Create a map to store the number and its occurrences { number : count}
	const map = new Map();
	let count = 1;
	for (let i = 0; i < nums.length; i++) {
		map.has(nums[i]) ? count++ : (count = 1);
		map.set(nums[i], count);
	}

    // Get the key that has value equals to 1
	for (let [key, value] of map) {
		if (value === 1) return key;
	}
};

console.log(singleNumber([4, 1, 2, 1, 2]));
