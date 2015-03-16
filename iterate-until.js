(function(root) {

  function iterateUntil(cond, fn) {
    if (!cond) throw new TypeError('Condition is required.');
    if (!fn) throw new TypeError('Function is required.');
    var rest = [].slice.call(arguments).slice(2);
    var ret = [];
    var result = fn.apply(null, rest);
    while (cond(result)) {
      ret.push(result);
      result = fn.call(null, result);
    }
    return ret;
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = iterateUntil;
    }
    exports.iterateUntil = iterateUntil;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return iterateUntil;
    });
  } else {
    root.iterateUntil = iterateUntil;
  }

})(this);

