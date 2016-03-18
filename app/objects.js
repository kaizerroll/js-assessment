exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    return fn.call(obj);
  },

  // still need a little review on this
  alterObjects : function(constructor, greeting) {
    console.log(constructor.prototype);
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    let ownProps = [];
    for (prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        let propString = `${prop}: ${obj[prop]}`;
        ownProps.push(propString);
      }
    }
    return ownProps;
  }
};
