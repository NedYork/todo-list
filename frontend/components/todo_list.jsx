var React = require('react');
var ReactDOM = require('react-dom');
var TodoStore = require('./../stores/todo_store.js');

var TodoList = React.createClass({

  getInitialState: function () {
    return {todos: TodoStore.all() };
  },

  todosChanged: function () {
    this.setState({todos: TodoStore.all() });
  },

  componentDidMount: function () {
    TodoStore.addChangedHandler(this.todosChanged);
    TodoStore.fetch();
  },

  componentWillUnmount: function () {
    TodoStore.removeChangedHandler(this.todosChanged);
    TodoStore.fetch();
  },

  render: function () {
    var todos = this.state.todos;

    return (
      <div>
        <ul>
          {todos.map(function (item, index) {
            return <li key={index} >{item}</li>;}
            )}
        </ul>
      </div>
    );
  }
});


module.exports = TodoList;
