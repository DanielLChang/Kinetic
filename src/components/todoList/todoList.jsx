import React from 'react';
import TodoListItem from './TodoListItem.jsx';

export default class TodoList extends React.Component {
  render() {
    const { todos, receiveTodo } = this.props;
    const todoItems = todos.map((todo, idx) => {
      return <TodoListItem
        key={`todo-list-item-${idx}`}
        todo={todo}
        receiveTodo={receiveTodo}
        />;
    });

    return (
      <div>
        <ul>
          {todoItems}
        </ul>
      </div>
    );
  }
}
