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
        button,
        steps,
        mapSteps;

    if (this.props.visible) {
      steps = this.props.todo.steps;
      mapSteps = <ol>{steps.map(function (step, index) {
        return (<li key={index}>{step.description}</li>);
      })}</ol>;
      body = this.props.todo.body;
      button = <button onClick={this.handleDestroy}>Delete</button>;
    }

    return (
      <div>
        {body}
        {mapSteps}
        {button}
      </div>
    );
  }

});


module.exports = TodoDetailView;
