exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    let bitString = parseInt(num, 10).toString(2);
    // bitString is in big endian, so need to reverse index
    let index = bitString.length - bit;
    return parseInt(bitString.charAt(index), 10);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    let bitString = parseInt(num, 10).toString(2);
    let padding = "0".repeat(8 - bitString.length);
    return padding + bitString;
  },

      // expect(multiply(3.1, 1.00011)).to.eql(3.100341);

  multiply: function(a, b) {
    let multA = Math.pow(10, getDecimalLength(a)),
        multB = Math.pow(10, getDecimalLength(b));

    return ((a * multA) * (b * multB)) / (multA * multB);

    // return ((a * multA) * (b * multB)) / (multA * multB);

    function getDecimalLength(num) {
      let dec = num.toString().split('.')[1] || "";
      return dec.length;
    }
  }
};
