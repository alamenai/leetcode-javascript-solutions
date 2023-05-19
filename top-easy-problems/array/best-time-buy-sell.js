/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let profit = 0;

	prices.forEach((currentPrice, index) => {
		let nextPrice = prices[index + 1];
		if (nextPrice > currentPrice) {
			profit += nextPrice - currentPrice;
		}
	});

	return profit;
};
