// TodoStore = require('./stores/todo_store.js');
var React = require('react');
var ReactDOM = require('react-dom');
var TodoList = require('./components/todo_list.jsx');
var TodoListItem = require('./components/todo_list_item.jsx');


var TodoApp = React.createClass({
  render: function () {
    return(
      <div>
        <TodoList/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<TodoApp />, document.getElementById('root'));
});
