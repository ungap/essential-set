var Set = require('../cjs');
var $Set = Set;
test();

delete require.cache[require.resolve('../cjs')];
delete global.Set;

if (typeof process !== 'undefined') {
  var i = 0;
  Object.defineProperty(global, 'Set', {
    configurable: true,
    get: function () {
      if (0 === i++)
        throw Set;
      return $Set;
    },
    set: function (Set) {
      delete global.Set;
      global.Set = Set;
    }
  });
}

Set = require('../cjs');
global.Set = $Set;

test();

function test() {
  var a = {};

  var ws1 = new Set;
  console.log(ws1);

  console.assert(ws1.has(a) === false);
  console.assert(ws1.add(a) === ws1);
  console.assert(ws1.has(a) === true);
  console.assert(ws1.add(a) === ws1);
  console.assert(ws1.delete(a) === true);
  console.assert(ws1.delete(a) === false);
  console.assert(ws1.has(a) === false);
}
