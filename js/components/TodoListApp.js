import React, { Component, PropTypes } from'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import TodoItemList from './TodoItemList';
import TodoItemForm from './TodoItemForm';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../actions';

class TodoListApp extends Component {
  render() {
    const { dispatch, todos, total, completed } = this.props;
    return (
      <div className="flux-todo-app">
        <TodoItemList
          total={total}
          completed={completed}
          items={todos}
          onToggleClick={index =>
            dispatch(toggleTodo(index))
          }
          onRemoveClick={index =>
            dispatch(removeTodo(index))} />
        <TodoItemForm
          onAddClick={text =>
            dispatch(addTodo(text))
          } />
      </div>
    );
  }
}

TodoListApp.propTypes = {
  todos: ImmutablePropTypes.listOf(PropTypes.shape({
    content: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  })),
  total: PropTypes.number.isRequired,
  completed: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function select(state) {
  return {
    todos: state.todos,
    total: state.todos.size,
    completed: state.todos.count((item) => { return item.done; }),
  };
}

export default connect(select)(TodoListApp);
