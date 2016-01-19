var _todos = [],
  _callbacks = [];

var TodoStore = {

  changed: function () {
    _callbacks.forEach(function(callback) {
      callback();
    });
  },

  addChangedHandler: function (callback) {
    _callbacks.push(callback);
  },

  removeChangedHandler: function (callback) {
    var idx = _callbacks.indexOf(callback);
    if (idx !== -1) {
      _callbacks.splice(idx, 1);
    }
  },


};

module.exports = TodoStore;
