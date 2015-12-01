const React = require('react');
const TodoListActions = require('../actions/TodoListActions');

const TodoItemForm = React.createClass({
  handleSubmit(e) {
    // Prevent the default behaviour of the submit.
    e.preventDefault();
    // Get the content from the DOM
    const content = this.refs.content.value.trim();
    if (!content) {
      return;
    }
    // Push the new todo item onto our dispatcher.
    TodoListActions.addToList(content);
    // Empty out the input, ready for new input to be added.
    this.refs.content.value = '';
  },
  render() {
    return (
      <form className="todoItemForm" onSubmit={this.handleSubmit}>
        <input type="text" ref="content" placeholder="Enter a new item" />
        <input type="submit" value="Add" />
      </form>
    );
  },
});

module.exports = TodoItemForm;
