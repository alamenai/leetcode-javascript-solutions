/**
 * 415. Add Strings
Easy
4.3K
637
Companies
Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

 

Example 1:

Input: num1 = "11", num2 = "123"
Output: "134"
Example 2:

Input: num1 = "456", num2 = "77"
Output: "533"
Example 3:

Input: num1 = "0", num2 = "0"
Output: "0"
 

Constraints:

1 <= num1.length, num2.length <= 104
num1 and num2 consist of only digits.
num1 and num2 don't have any leading zeros except for the zero itself.
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
	if (num1.length < num2.length) {
		[num1, num2] = [num2, num1];
	}
	let supplement = 0;
	let total = [];
	let j = num2.length - 1;

	for (let index = num1.length - 1; index >= 0; index--) {
		let dig1 = Number(num1[index]);
		let dig2 = Number(num2[j]);
		if (Number.isNaN(dig2)) {
			dig2 = 0;
		}
		let digit = dig1 + dig2 + supplement;
		if (digit < 10) {
			total.unshift(digit);
			supplement = 0;
		} else {
			total.unshift(digit % 10);
			supplement = 1;
		}

		j--;
		if (index === 0 && supplement === 1) {
			total.unshift(1);
		}
	}

	return total.join('');
};

console.log(addStrings('456', '77'));
console.log(addStrings('9', '1'));
console.log(addStrings('408', '5'));
console.log(addStrings('6994', '36'));
console.log(addStrings('9', '99'));
