/**LINK: https://leetcode.com/problems/sleep/ */

/**
 * @param {number} millis
 */
const sleep = (millis) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(millis);
		}, millis);
	});
};

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
