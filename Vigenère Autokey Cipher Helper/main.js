function VigenèreAutokeyCipher(origKey, abc) {
  this.encode = function(str) {
    let ignore = 0, key = origKey;
    return str.split('').map(function(v, i) {
      if (abc.indexOf(v) == -1) {ignore ++; return v;}
      key = key.concat(v);
      return abc[(abc.indexOf(v) + abc.indexOf(key[i - ignore])) % abc.length];
    }).join('');
  };
  this.decode = function (str) {
    let ignore = 0, key = origKey;
    return str.split('').map( function (v, i) {
      if (abc.indexOf(v) == -1) {ignore ++; return v;}
      let index = abc.indexOf(v) - abc.indexOf(key[i - ignore]),
          out = abc[index < 0 ? index + abc.length : index];
      key = key.concat(out);
      return out;
    }).join('');
  };
}