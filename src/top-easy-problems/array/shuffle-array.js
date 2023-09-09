/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
	let leftArr = nums.slice(0, n);
	let rightArr = nums.slice(n, nums.length);

	let j = 0;
	let i = 0;
	while (j < nums.length) {
		nums[j] = leftArr[i];
		nums[j + 1] = rightArr[i];
		j = j + 2;
		i = i + 1;
	}
	return nums;
};
