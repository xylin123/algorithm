String.prototype.indexOf = function(str, fromIndex = 0) {
  const r = new RegExp(str, 'g');
  r.lastIndex = fromIndex;
  let i = r.exec(this);
  return i ? i.index : -1;
}

String.prototype.lastIndexOf = function(str, fromIndex = this.length) {
  const r = new RegExp(str, 'g');
  let index = -1;
  while (true) {
    let i = r.exec(this);
    if (i === null || i.index > fromIndex) break;
    index = i.index;
    // 比较关键的逻辑 => 下次正则匹配起始位置为前面的 `index + 1`
    r.lastIndex = index + 1;
  }
  return index;
} 

/************************** 以下自己第一次做的方式 ********************************/

String.prototype.indexOf = function(searchString, fromIndex = 0) {
    const pattern = new RegExp(searchString, 'g');
    let matchObj;
    for (let n = 0; n < this.length; n += 1) {
        pattern.lastIndex = n;
        matchObj = pattern.exec(this);
        if (matchObj && matchObj.index >= fromIndex) break;
    }
    return matchObj ? matchObj.index : -1;
}

String.prototype.lastIndexOf = function(searchString, fromIndex = this.length) {
    const pattern = new RegExp(searchString, 'g');
    let matchObj, index = -1;
    for (let n = 0; n <= fromIndex; n += 1) {
        pattern.lastIndex = n;
        matchObj = pattern.exec(this);
        if (matchObj && matchObj.index > index && matchObj.index <= fromIndex ) index = matchObj.index;
    }
    return index;
}
