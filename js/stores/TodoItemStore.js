var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TodoConstants = require('../constants/TodoConstants');
var _ = require('underscore');

// Include some initial test data
var _todoItems = [{Content: 'Do this tomorrow', Done: true}, 
		{Content: 'Do this today', Done: false}];

var add = (content) => {
	_todoItems.push({Content: content, Done: false});
}

var removeItem = (id) => {
	_todoItems.splice(id,1);
}

var doneItem = (id) => {
	var item = _todoItems[id];
	item.Done = !item.Done;
}

// Our store inherits behaviour from the EventEmitter
var TodoItemStore = _.extend({}, EventEmitter.prototype, {
	getTodoItems() {
		return _todoItems;
	},

	getTodoItemCount() {
		return Object.keys(_todoItems).length;
	},

	getDoneItemCount() {
		var done = _.filter(_todoItems, function(item) {return item.Done});
		return Object.keys(done).length;
	},

	// Broadcast an event to all who subscribe to this store that something has changed
	emitChange () {
		this.emit('change');
	},

	// Used by components so they can add their listener and get callbacks when events happen in this store. 
	addChangeListener(callback) {
		this.on('change', callback);
	},

	removeChangeListener(callback) {
		this.removeListener('change', callback);
	}
});

// Register this store with the dispatcher.
// We want this store to persist data from these actions.
// Once the store has done it's changes we emit a 'change' event to the subscribers of this store. 
AppDispatcher.register(function(payload) {
	var action = payload.action;
	var text;

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