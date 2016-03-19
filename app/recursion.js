exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    let collectedFiles = [];

    for (let file of data.files) {
      if (typeof file === "string") {         // file 
        if (!dirName || file.endsWith(dirName)) {
          collectedFiles.push(file);
        }
      } 
      else if (typeof file === "object") {  // folder 
        let subDirFiles = this.listFiles(file, dirName);
        Array.prototype.push.apply(collectedFiles, subDirFiles);
      }
    }

    return collectedFiles;
  },

  // love this one
  permute: function(arr) {
    return permute_helper([], arr);

    function permute_helper(perm, rest) {
      let perms = [];
      if (rest.length < 2) {
        perms.push(perm.concat(rest));
      } else {
        for(let i = 0; i < rest.length; i++) {
          let this_rest = get_rest(i, rest),
              this_perm = perm.concat([rest[i]]);
          let result = permute_helper(this_perm, this_rest);
          Array.prototype.push.apply(perms, result);
        }
      }
      return perms;
    }

    function get_rest(index, lst) {
      let clone = lst.slice();
      clone.splice(index, 1);
      return clone;
    }
  },

  fibonacci: function(n) {
    let fib_sequence = [0,1];
    while (fib_sequence.length <= n) {
      let last1 = fib_sequence[fib_sequence.length-1],
          last2 = fib_sequence[fib_sequence.length-2];
      fib_sequence.push(last1 + last2);
    }
    return fib_sequence[n];
  },

  validParentheses: function(n) {
    let validParens = [];
    if (n === 1) {
      return ["()"];
    }

    let prevLevel = this.validParentheses(n-1);
    for (prev of prevLevel) {
      let left     = prev + "()",
          right    = "()" + prev,
          surround = "(" + prev + ")";
      for (p of [left, right, surround]) {
        if (validParens.indexOf(p) === -1) {
          validParens.push(p);
        } 
      }
    }

    return validParens;
  }
};
