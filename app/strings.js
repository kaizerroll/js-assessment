exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let accepted_chars = [],
        repeatCount = 0;

    for (let i = 0; i < str.length; i++) {
      if (str[i-1] === str[i]) {
        repeatCount += 1;
      } else {
        repeatCount = 0;
      }
      if (repeatCount < amount) {
        accepted_chars.push(str[i]);
      }
    }
    return accepted_chars.join("");
  },

  wordWrap: function(str, cols) {
    // find all spaces

    let charList = str.split(''),
        spaceIndexes = [];

    for (let i = 0; i < charList.length; i++) {
      if (charList[i] === " ") {
        spaceIndexes.push(i);
      }
    }

    for (let i = 0; i < spaceIndexes.length; i++) {
      let currIndex = spaceIndexes[i],
          prevIndex = spaceIndexes[i-1] || 0,
          nextIndex = spaceIndexes[i+1] || charList.length-1;

      if (currIndex - prevIndex >= cols
          || nextIndex - prevIndex >= cols) {
        charList.splice(currIndex, 1, '\n');
      }
    }

    return charList.join('');
  },
  
  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
