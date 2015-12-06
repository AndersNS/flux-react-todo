import { combineReducers } from 'redux';
import { List } from 'immutable';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actions';

const initialState = List([{content: 'Hey hey', done: false}, {content: 'hey hey 2', done: true}]);

function todos(state = initialState, action) {
  switch (action.type) {
  case ADD_TODO:
    return state.push(
      {
        content: action.content,
        done: false,
      });
  case REMOVE_TODO:
    return state.delete(action.index);
  case TOGGLE_TODO:
    return state.update(action.index, (item) => {
      return Object.assign({}, item, {done: !item.done});
    });
  default:
    return state;
  }
}

const todoApp = combineReducers({
  todos,
});

export default todoApp;
