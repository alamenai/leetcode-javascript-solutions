const longestCommonPrefix = (strs = []) => {
  return strs.reduce((prev, next) => {
    let index = 0;
    while (prev.charAt(index) === next.charAt(index)) index++;
    return prev.slice(0, index);
  });
};
