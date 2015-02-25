var React = require('react');
var TodoItemList = require('./TodoItemList');
var TodoItemForm = require('./TodoItemForm');
var TodoItemStore = require('../stores/TodoItemStore');

var getItemState = () => {
	var items = TodoItemStore.getTodoItems();
  var totalItems = TodoItemStore.getTodoItemCount();
  var doneItems = TodoItemStore.getDoneItemCount();
	return {
		items: items,
    totalItems: totalItems,
    doneItems: doneItems
		};
}

var TodoListApp = React.createClass({
	getInitialState() {
    return getItemState();
  },
  // This method is invoked immediatly after the intiail rendering has occured.
  componentDidMount() {
  	TodoItemStore.addChangeListener(this._onChange);	
  },
  // When the store pushes a change event to us we get the new state from the store.
  // setState forces a rerender of this component and its children.
  _onChange() {
  	this.setState(getItemState());
  },
  render() {
  	return (
      <div className="flux-todo-app">
      	<TodoItemList items={this.state.items} done={this.state.doneItems} total={this.state.totalItems}/>
      	<TodoItemForm />
      </div>
  	);
  },
});

module.exports = TodoListApp;