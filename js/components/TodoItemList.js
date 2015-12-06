import React from 'react';
import TodoItem from './TodoItem';

const TodoItemList = ({items, total, completed, onToggleClick, onRemoveClick }) => (
      <div className="todo-list-items">
        Total:{total}, Completed:{completed}
        <ul>
          {
            items.map((item, key) => {
              return (
                <TodoItem
                  key={key}
                  itemId={key}
                  item={item}
                  onToggleClick={() => onToggleClick(key)}
                  onRemoveClick={() => onRemoveClick(key)} />);
            })
          }
        </ul>
      </div>
    );

module.exports = TodoItemList;
