/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
	const maxSalary = Math.max(...salary);
	const minSalary = Math.min(...salary);
	let excludedSalary = salary.filter(
		(value) => value !== maxSalary && value !== minSalary
	);
	let totalSalary = excludedSalary.reduce((acc, v) => (acc += v), 0);
	return totalSalary / excludedSalary.length;
};
