function LCS(x, y) {
  let i = 0, str = '';
  for (let j = 0; j < y.length; j ++) {
    if (x.indexOf(y[j], i) > -1) {
      str += y[j];
      i = x.indexOf(y[j], i) + 1;
    }
  }
  return str;
}