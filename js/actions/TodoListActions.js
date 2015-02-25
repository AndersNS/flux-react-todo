var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');

// Define the actions our app can do and dispatch them on our dispatcher. 
var TodoListActions = {
	// Add a new item to our list with the specified content
	addToList(content) {
		AppDispatcher.handleAction({
			actionType: TodoConstants.TODO_ITEM_ADD,
			content: content
		})
	},

	// Remove an item from our list
	removeFromList(id) {
		AppDispatcher.handleAction({
			actionType: TodoConstants.TODO_ITEM_REMOVE,
			Id: id
		})
	},

	// Mark an item as completed or uncompleted
	markItemDone(id) {
		AppDispatcher.handleAction({
			actionType: TodoConstants.TODO_ITEM_DONE,
			Id: id
		})
	}
};

module.exports = TodoListActions;