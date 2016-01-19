var React = require('react');
var ReactDOM = require('react-dom');
var TodoStore = require('./../stores/todo_store.js');
var DoneButton = require('./done_button.jsx');

var TodoDetailView = React.createClass({


  handleDestroy: function (e) {
    e.preventDefault();
    TodoStore.destroy(this.props.todo.id);
  },

  render: function () {
    var body,
        button;

    if (this.props.visible) {
      body = this.props.todo.body;
      button = <button onClick={this.handleDestroy}>Delete</button>;
    }

    return (
      <div>
        {body}
        {button}
      </div>
    );
  }

});


module.exports = TodoDetailView;
