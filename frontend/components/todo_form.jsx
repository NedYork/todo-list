var React = require('react');
var ReactDOM = require('react-dom');
var TodoStore = require('./../stores/todo_store.js');

var TodoForm = React.createClass ({

  getInitialState: function () {
    return { title: "", body: "" };
  },

  updateTitle: function (e) {
    this.setState({title: e.target.value });
  },

  updateBody: function (e) {
    this.setState({body: e.target.value });
  },

  handleSubmit: function (e) {
    e.preventDefault();
    TodoStore.create({title: this.state.title, body: this.state.body});
    this.setState({title: "", body: "" });
  },

  render: function () {
    var title = this.state.title;
    var body = this.state.body;

    return (
      <form onSubmit={this.handleSubmit} >
        <label>Title</label>
        <input
          type="text"
          onChange={this.updateTitle}
          name="todo[title]"
          value={title}
          placeholder="title">
        </input>
        <br></br>

        <label>Body</label>
        <input
          type="textarea"
          onChange={this.updateBody}
          name="todo[body]"
          value={body}
          placeholder="body">
        </input>
        <br></br>
        <button >Submit</button>
      </form>
    );
  }

});


module.exports = TodoForm;
