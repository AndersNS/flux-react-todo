import React from 'react';
import ReactDOM from 'react-dom';
import TodoListApp from './components/TodoListApp';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers';

const store = createStore(todoApp);

// Render TodoList
ReactDOM.render(
  <Provider store={store}>
    <TodoListApp />
  </Provider>,
  document.getElementById('todo-app'));
