var React = require('react');
var ReactDOM = require('react-dom');
var TodoStore = require('./../stores/todo_store.js');

var DoneButton = React.createClass({
  handleDone: function (e) {
    e.preventDefault();
    TodoStore.toggleDone(this.props.todo.id);
  },
  render: function () {
    var text;
    if (this.props.todo.done) {
      text = "Undo";
    } else {
      text = "Done";
    }
    return (<button onClick={this.handleDone}>{text}</button>);
  }
});

module.exports = DoneButton;
