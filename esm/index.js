/*! (c) Andrea Giammarchi - ISC */
var self = {};
try { self.Set = Set; }
catch (Set) {
  self.Set = function Set() {
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
export default self.Set;
