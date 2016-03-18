exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    let curr = start;
    callback();
    let intervalObj = setInterval(callback, 100);

    function callback() {
      console.log(curr);
      curr++;
      if (curr > end) {
        cancel(); 
      }
    }

    function cancel() {
      clearInterval(intervalObj);  
    }

    return { cancel };
  }
};
