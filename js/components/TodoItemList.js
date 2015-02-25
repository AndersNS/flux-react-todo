var React = require('react');
var TodoItem = require('./TodoItem');

var TodoItemList = React.createClass({
	render() {
		var self = this;
		var items = this.props.items;
		var total = this.props.total;
		var done = this.props.done;
		return (
			<div className="todo-list-items">
				Total:{total}, Completed:{done}
				<ul>
					{Object.keys(items).map(function(item) {
						return (
								<TodoItem key={item} itemId={item} item={items[item]}  />
							)
					})}
				</ul>
			</div>
		);
	}
});

module.exports = TodoItemList;