var Set = require('../cjs');

var $Set = Set;

test();

delete require.cache[require.resolve('../cjs')];
delete global.Set;

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
