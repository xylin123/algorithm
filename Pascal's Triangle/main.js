function pascalsTriangle(n) {
  //return a flat array representing the values of Pascal's Triangle to the n-th level
  let pascals = [],
      idx = 0;
  for (let i = 0; i < n; i++ ) {
    idx = pascals.length - i;
    for (let j = 0; j < i + 1; j ++) {
      if (j === 0 || j === i) {
        pascals.push(1);
      } else {
        pascals.push(pascals[idx + j - 1] + pascals[idx + j]);
      }
    }
  }
  return pascals;
}