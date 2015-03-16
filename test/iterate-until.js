var test = require('tape');
var iterateUntil = require('../iterate-until');

test('iterateUntil', function (t) {
  t.plan(9);

  t.throws(function() { iterateUntil(''); });
  t.throws(function() { iterateUntil(0); });
  t.throws(function() { iterateUntil(null); });
  t.throws(function() { iterateUntil(undefined); });
  t.throws(function() { iterateUntil(1); });
  t.throws(function() { iterateUntil({}); });
  t.throws(function() { iterateUntil([]); });
  t.throws(function() { iterateUntil(function() { }); });

  function addTwo(i) {
    return i + 2;
  }

  function isLessThanEight(n) {
    return n < 8;
  }

  var result = iterateUntil(isLessThanEight, addTwo, 0);

  t.deepEqual(result, [2,4,6]);
});
