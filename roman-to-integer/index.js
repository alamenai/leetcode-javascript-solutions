const romanToInteger = (romanInput) => {
  /**
   * roman input length should be between 1 and 15
   */
  if (romanInput.length < 1 || romanInput.length > 15) {
    throw new Error('The roman length should be between 1 and 15');
  }
  /**
   * Create a map for storing the base roman numbers
   */
  const map = new Map();
  map.set('I', 1);
  map.set('V', 5);
  map.set('X', 10);
  map.set('L', 50);
  map.set('C', 100);
  map.set('D', 500);
  map.set('M', 1000);

  /**
   * Convert the string to array  and accumulate values based on the constraints
   *
   */
  const integer = Array.from(romanInput).reduce(
    (acc, value, index, array) =>
      map.get(value) < map.get(array[index + 1])
        ? (acc -= map.get(value))
        : (acc += map.get(value)),
    0
  );

  return integer;
};
