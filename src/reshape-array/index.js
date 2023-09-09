/**
 * In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix
 */

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (matrix, r, c) {
	let m = matrix.length;
	let n = matrix[0].length;
	let arr = [[]];
	if (n * m !== r * c) return matrix;
	for (let index = 0; index < m * n; index++) {
		arr[Math.floor(index / c)][index % c] =
			matrix[Math.floor(index / m)][index % m];
	}
	return arr;
};

console.log(
	matrixReshape(
		[
			[1, 2],
			[3, 4],
		],
		1,
		4
	)
);
