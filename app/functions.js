exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(fn, arr)
  },

  speak : function(fn, obj) {
    return fn.call(obj)
  },

  functionFunction : function(str1) {
    return (str2) => `${str1}, ${str2}`
  },

  makeClosures : function(arr, fn) {
    return arr.map(x => () => fn(x))
  },

  partial : function(fn, str1, str2) {
    return str3 => fn(str1, str2, str3)
  },

  useArguments : function() {
    let args = Array.prototype.slice.call(arguments);
    return args.reduce((x, acc) => x + acc, 0);
  },

  callIt : function(fn) {
    let args = Array.prototype.slice.call(arguments);
    args.shift(); // remove fn which is first arg
    return fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {
    let args1 = Array.prototype.slice.call(arguments);
    args1.shift(); // remove fn which is first arg
    return function() {
      let args2 = Array.prototype.slice.call(arguments);
      let args = args1.concat(args2);
      return fn.apply(null, args);
    };
  },

  // this is a lot harder than expected
  // what is the problem?
  // Well, we are implementing currying!
  // How would you do this in Haskell?

  // curry :: (a -> b -> c) -> ((a,b) -> c)
  // curry f = \x y -> \(x,y) -> f x y

  // curry (\x -> \y -> x + y) === (\(x, y) -> x + y) 


  curryIt : function(fn) {
    return curryBuilder([]);

    function curryBuilder(collectedArgs) {
      return function(arg) {
        collectedArgs.push(arg);

        if (collectedArgs.length === fn.length) {
          return fn.apply(null, collectedArgs);
        } else {
          return curryBuilder(collectedArgs);
        }
      }
    }
  }
};
