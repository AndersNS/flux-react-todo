const AppDispatcher = require('../dispatcher/AppDispatcher');
const EventEmitter = require('events').EventEmitter;
const TodoConstants = require('../constants/TodoConstants');
const _ = require('lodash');

// Include some initial test data
const _todoItems = [{Content: 'Do this tomorrow', Done: true},
    {Content: 'Do this today', Done: false}];

const add = (content) => {
  _todoItems.push({Content: content, Done: false});
};

const removeItem = (id) => {
  _todoItems.splice(id, 1);
};

const doneItem = (id) => {
  let item = _todoItems[id];
  item.Done = !item.Done;
};

// Our store inherits behaviour from the EventEmitter
const TodoItemStore = _.extend({}, EventEmitter.prototype, {
  getTodoItems() {
    return _todoItems;
  },

  getTodoItemCount() {
    return Object.keys(_todoItems).length;
  },

  getDoneItemCount() {
    const done = _.filter(_todoItems, (item) => { return item.Done; });
    return Object.keys(done).length;
  },

  // Broadcast an event to all who subscribe to this store that something has changed
  emitChange() {
    this.emit('change');
  },

  // Used by components so they can add their listener and get callbacks when events happen in this store.
  addChangeListener(callback) {
    this.on('change', callback);
  },

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  },
});

// Register this store with the dispatcher.
// We want this store to persist data from these actions.
// Once the store has done it's changes we emit a 'change' event to the subscribers of this store.
AppDispatcher.register((payload) => {
  const action = payload.action;

  switch (action.actionType) {
  	case TodoConstants.TODO_ITEM_ADD:
      add(action.content);
      break;

    case TodoConstants.TODO_ITEM_REMOVE:
      removeItem(action.Id);
      break;
    case TodoConstants.TODO_ITEM_DONE:
      doneItem(action.Id);
      break;
    default:
      return true;
  }
  TodoItemStore.emitChange();

  return true;
});

module.exports = TodoItemStore;
