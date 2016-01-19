var React = require('react');
var ReactDOM = require('react-dom');
var TodoStore = require('./../stores/todo_store.js');
var TodoListItem = require('./todo_list_item.jsx');

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

    var mapped = todos.map(function (item, index) {
      return <TodoListItem todo={item} key={index} />;
    });

    return (
      <div>
        {mapped}
      </div>
    );
  }
});


module.exports = TodoList;
