/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
	return nums1.filter(
		(value) => nums2.includes(value) && nums2.splice(nums2.indexOf(value), 1)
	);
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([1, 2, 2, 1], [2]));
console.log(intersect([9, 4, 9, 8, 4], [4, 9, 5]));
console.log(intersect([2, 1], [1, 1]));
