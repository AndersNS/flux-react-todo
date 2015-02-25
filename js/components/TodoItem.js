var React = require('react');
var TodoListActions = require('../actions/TodoListActions');

var TodoItem = React.createClass({
	// Returns the line through style if the item is done
	lineThrough(done)  { 
		if(done) {
			return {textDecoration : 'line-through'};
		} else {
			return {}
		};
	},
	removeFromList(id) {
		// Tells our dispatcher we want this item removed from the list
		TodoListActions.removeFromList(id);
	},
	itemChecked(id) {
		// Tells our dispatcher to toggle the done attribute on this item. 
		TodoListActions.markItemDone(id);
	},
	render() {
		var self = this;
		var item = this.props.item;
		var itemId = this.props.itemId;
		var lineThrough = self.lineThrough(item.Done);
		
		return(
			<li key={itemId}>
				<input type="checkbox" ref="done" checked={item.Done} onChange={self.itemChecked.bind(self, itemId)}/>
				<span style={lineThrough}>
					{ item.Content }
				</span>
				<button onClick={self.removeFromList.bind(self, itemId)} value="Remove">Remove</button>
			</li>
		);
	}
});

module.exports = TodoItem;