/**LINK: https://leetcode.com/problems/generate-fibonacci-sequence/ */

/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
	let X1 = 0;
	let X2 = 1;
	while (true) {
		yield X1;
		X3 = X1 + X2;
		X2 = X1;
		X1 = X3;
	}
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
