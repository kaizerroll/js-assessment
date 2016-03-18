exports = (typeof window === 'undefined') ? global : window;

// is this really this simple?

exports.logicalOperatorsAnswers = {
  or : function(a, b) {
    return a || b;
  },

  and : function(a, b) {
    return a && b;
  }
};
