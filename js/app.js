var React = require('react');
var TodoListApp = require('./components/TodoListApp')

// Render TodoList
React.render(
  <TodoListApp/>,
  document.getElementById('todo-app')
);