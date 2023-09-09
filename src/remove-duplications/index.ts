export const removeDuplicates = (nums: number[]) => {
  let duplicate = nums[0];

  for (let index = 1; index < nums.length; index++) {
    if (nums[index] === duplicate) {
      nums[index] = -1;
    } else {
      duplicate = nums[index];
    }
  }

  const noDuplicates = nums.sort((a, b) => a - b).filter((v) => v != -1).length;

  return [noDuplicates];
};
