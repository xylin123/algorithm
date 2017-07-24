function pascalsTriangle(n) {
  //return a flat array representing the values of Pascal's Triangle to the n-th level
  let result = [[1]], i = 1;
  while (i < n) {
    let arr = [];
    for (let j = 0; j <= i; j++ ) {
      if(j == 0 || j == i ) {
        arr.push(1);
      } else {
        arr.push(result[i - 1][j] + result[i - 1][j - 1]);
      }
    }
    result.push(arr);
    i++;
  }
  return result.reduce(function(a, curr) {
    return curr.reduce(function(b, c) {
      b.push(c);
      return b;
    }, a)
  }, []);
}