/*! (c) Andrea Giammarchi - ISC */
try { new Set; }
catch (o_O) {
  Set = function () {
    var i = 0;
    var v = [];
    return {
      add: function add(value) {
        if (!contains(value))
          v.push(value);
        return this;
      },
      delete: function (value) {
        var had = contains(value);
        if (had)
          v.splice(i, 1);
        return had;
      },
      has: function has(value) {
        return contains(value);
      }
    };
    function contains(k) {
      i = v.indexOf(k);
      return -1 < i;
    }
  };
}
module.exports = Set;
