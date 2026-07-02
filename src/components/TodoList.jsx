import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleToggle, handleRemove }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleToggle={handleToggle}
          handleRemove={handleRemove}
        />
      ))}
    </ul>
  );
};

export default TodoList;