var React = require('react');
var ReactDOM = require('react-dom');
var TodoStore = require('./../stores/todo_store.js');

var TodoListItem = React.createClass({
  handleDestroy: function (e) {
    e.preventDefault();
    
    TodoStore.destroy(this.props.todo.id);
  },

  render: function () {
    var title = this.props.todo.title;
    var body = this.props.todo.body;
    return (
      <div>
        <div>{title}</div>
        <div>{body}</div>
        <button onClick={this.handleDestroy}>Delete</button>
      </div>
    );
  }

});


module.exports = TodoListItem;
