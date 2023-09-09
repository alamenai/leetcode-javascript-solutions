/**
 * An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.
 */

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
	if (image[sr][sc] === color) return image;
	fill(image, sr, sc, image[sr][sc], color);
	return image;
};

var fill = function (image, sr, sc, color, newColor) {
	/**
	 * Don't return anything if ;
	 * The row and the column is out of the boundary
	 * The color of the cell is not the same as the color of the first vertext ( color )
	 */
	if (
		sr < 0 ||
		sc < 0 ||
		sr >= image.length ||
		sc >= image[0].length > 0 ||
		image[sr][sc] !== color
	) {
		return;
	}
	image[sr][sc] = newColor;
	move(image, sr, sc, color, newColor);
};

/**
 * Move the index to RIGHT | LEFT | TOP | BOTTOM ( 4-directionally )
 */
var move = (image, sr, sc, color, newColor) => {
	fill(image, sr + 1, sc, color, newColor);
	fill(image, sr - 1, sc, color, newColor);
	fill(image, sr, sc + 1, color, newColor);
	fill(image, sr, sc - 1, color, newColor);
};
