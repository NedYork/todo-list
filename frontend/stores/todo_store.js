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
        _todos = data;
        TodoStore.changed();
      },
      error: function () {
        alert("ERROR");
      }
    });
  },

  create: function (todo) {
    $.ajax({
      url: "/api/todos",
      type: "POST",
      dataType: "json",
      data: { todo: todo },
      success: function (data) {
        _todos.push(data);
        TodoStore.changed();
      },
      error: function () {
        // whatever error
      }
    });
  },

  destroy: function (id) {
    var idx = -1;

    for (var i = 0; i < _todos.length; i++) {
      if ( _todos[i].id === id ) {
        idx = i;
        break;
      }
    }

    if (idx !== -1) {
      $.ajax({
        url: "/api/todos/" + id,
        type: "delete",
        dataType: "json",
        success: function (response) {
          _todos.splice(i, 1);
          TodoStore.changed();
        },
        error: function (response) {
          // whatever error
        }
      });
    }
  },

  toggleDone: function (id) {
    var idx = -1;

    for (var i = 0; i < _todos.length; i++) {
      if ( _todos[i].id === id ) {
        idx = i;
        break;
      }
    }

    if (idx !== -1) {
      var todo = _todos[idx];
      todo.done = true;

      $.ajax({
        url: "/api/todos/" + id,
        type: "PATCH",
        dataType: "json",
        data: { todo: todo },
        success: function (data) {
          TodoStore.changed();
        },
        error: function () {
          // whatever error
        }
      });
    }
  }


};

module.exports = TodoStore;
