import React, { Component, PropTypes } from 'react';

export default class TodoItemForm extends Component {
  handleSubmit(e) {
    // Prevent the default behaviour of the submit.
    e.preventDefault();
    const content = this.refs.content.value.trim();
    this.props.onAddClick(content);
    this.refs.content.value = '';
  }

  render() {
    return (
      <form className="todoItemForm" onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" ref="content" placeholder="Enter a new item" />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

TodoItemForm.propTypes = {
  onAddClick: PropTypes.func.isRequired,
};
