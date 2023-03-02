function subarraySum(arr, n, s) {
	// subarray sum

	for (let i = 0; i < n; i++) {
		let sum = arr[i];
		if (sum === s) {
			return [i + 1];
		}
		for (let j = i + 1; j < n; j++) {
			sum += arr[j];
			if (sum === s) {
				return [i + 1, j + 1];
			}
		}
	}
    return
}

console.log(subarraySum([1, 2, 3, 7, 5], 5, 12));
console.log(subarraySum([1, 2, 3, 4], 4, 7));
console.log(subarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, 15));
