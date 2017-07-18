function LCS(x, y) {
  let i = 0;
  return y.split('').reduce( function (str, letter) {
    if (x.indexOf(letter, i) > -1) {
      str += letter;
      i = x.indexOf(letter, i) + 1;
    }
    return str;
  }, '');
}