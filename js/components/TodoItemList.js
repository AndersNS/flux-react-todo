const React = require('react');
const TodoItem = require('./TodoItem');

const TodoItemList = ({items, total, done}) => (
      <div className="todo-list-items">
        Total:{total}, Completed:{done}
        <ul>
          {
            Object.keys(items).map((item) => {return <TodoItem key={item} itemId={item} item={items[item]} />; })
          }
        </ul>
      </div>
    );

module.exports = TodoItemList;
