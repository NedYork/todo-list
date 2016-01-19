var React = require('react');
var ReactDOM = require('react-dom');
var TodoStore = require('./../stores/todo_store.js');
var DoneButton = require('./done_button.jsx');
var TodoDetailView = require('./todo_detail_view.jsx');

var TodoListItem = React.createClass({
  getInitialState: function () {
    return {visible: false};
  },

  toggleVisibility: function (e) {
    var visibility = this.state.visible;

    this.setState({visible: !visibility});
  },

  render: function () {
    var title = this.props.todo.title;
    var todo = this.props.todo;
    var visible = this.state.visible;

    return (
      <div>
        <div onClick={this.toggleVisibility} >{title}</div>
        <TodoDetailView todo={todo} visible={visible}/>
        <DoneButton todo={this.props.todo}/>
      </div>
    );
  }
});


module.exports = TodoListItem;
