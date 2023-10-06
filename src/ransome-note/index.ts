export const canConstruct = (ransomNote: string, magazine: string): boolean => {
  const result = ransomNote
    .split("")
    .map((el) => magazine.includes(el) ? el = "" : el)
    .join("");

  return result.length === 0;
};
