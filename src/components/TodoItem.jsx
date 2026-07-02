import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div className="todo-item" style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>Remove</button>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  completeTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoItem;