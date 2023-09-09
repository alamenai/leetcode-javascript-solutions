const longestCommonPrefix = (strs = []) => {
  /**
   * Compare between the characters of the previous and next word in our array
   */
  return strs.reduce((prev, next) => {
    let index = 0;
    while (prev.charAt(index) === next.charAt(index)) index++;
    return prev.slice(0, index);
  });
};
