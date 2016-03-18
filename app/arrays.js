exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  // only returns first
  indexOf : function(arr, item) {
    return arr.indexOf(item)
  },

  sum : function(arr) {
    return arr.reduce((acc, x) => acc + x, 0)
  },

  remove : function(arr, item) {
    return arr.filter(x => x !== item)
  },

  removeWithoutCopy : function(arr, item) {
    while(true) {
      let next = arr.indexOf(item);
      if (next === -1) {
        break;
      } else {
        arr.splice(next, 1);
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    return arr.filter(x => x === item).length;
  },

  duplicates : function(arr) {
    let uniques = Array.from(new Set(arr));
    return uniques.filter(x => this.count(arr, x) > 1);
  },

  square : function(arr) {
    return arr.map(x => x * x);
  },

  findAllOccurrences : function(arr, target) {
    return arr
      .map((val, i) => ({val, i}))
      .filter(({val, i}) => val === target)
      .map(({val, i}) => i);
  }
};
