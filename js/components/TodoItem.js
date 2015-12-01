const React = require('react');
const TodoListActions = require('../actions/TodoListActions');

const TodoItem = React.createClass({
  propTypes: {
    itemId: React.PropTypes.string.isRequired,
    item: React.PropTypes.object.isRequired,
  },
  // Returns the line through style if the item is done
  lineThrough(done) {
    if (done) {
      return {textDecoration: 'line-through'};
    }
    return {};
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
    const self = this;
    const { item, itemId } = this.props;
    const lineThrough = self.lineThrough(item.Done);

    return (
      <li key={itemId}>
        <input type="checkbox" ref="done" checked={item.Done} onChange={self.itemChecked.bind(self, itemId)}/>
        <span style={lineThrough}>
          { item.Content }
        </span>
        <button onClick={self.removeFromList.bind(self, itemId)} value="Remove">Remove</button>
      </li>
    );
  },
});

module.exports = TodoItem;
