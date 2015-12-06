// action types
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

// action creators
export function addTodo(content) {
  return { type: ADD_TODO, content };
}

export function removeTodo(index) {
  return { type: REMOVE_TODO, index };
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index };
}
