import React, { Component, PropTypes } from 'react';

export default class TodoItem extends Component {
  // Returns the line through style if the item is done
  lineThrough(done) {
    if (done) {
      return {textDecoration: 'line-through'};
    }
    return {};
  }

  render() {
    const self = this;
    const { item, itemId } = this.props;
    const lineThrough = self.lineThrough(item.done);
    return (
      <li key={itemId}>
        <input type="checkbox" ref="done" checked={item.done} onChange={this.props.onToggleClick}/>
        <span style={lineThrough}>
          { item.content }
        </span>
        <button onClick={this.props.onRemoveClick} value="Remove">Remove</button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  itemId: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  onToggleClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};
