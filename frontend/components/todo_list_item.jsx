var React = require('react');
var ReactDOM = require('react-dom');
var TodoStore = require('./../stores/todo_store.js');

var TodoListItem = React.createClass({

  render: function () {
    var title = this.props.todo.title;
    var body = this.props.todo.body;
    return (
      <div>
        <div>{title}</div>
        <div>{body}</div>
      </div>
    );
  }

});


module.exports = TodoListItem;
