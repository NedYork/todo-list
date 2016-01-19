TodoStore = require('./stores/todo_store.js');
var React = require('react');
var ReactDOM = require('react-dom');


var TodoApp = React.createClass({
  render: function () {
    return(
      <div>Hello World</div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<TodoApp />, document.getElementById('root'));
});
