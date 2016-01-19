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

  all: function () {
    return _todos.slice();
  },

  fetch: function () {
    $.ajax({
      url: "/api/todos",
      type: "GET",
      dataType: "json",
      success: function (data) {
        _todo = data;
        TodoStore.changed();
      },
      error: function () {
        alert("ERROR");
      }
    });
  },

  create: function (todo) {
    
  }


};

module.exports = TodoStore;
