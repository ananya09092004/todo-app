import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

const TodoItem = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div
      className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}
      key={index}
    >
      <div className="todo-text">{todo.text}</div>
      <div className="todo-actions">
        <button
          className="complete-btn"
          onClick={() => completeTodo(index)}
        >
          Complete
        </button>
        <button
          className="remove-btn"
          onClick={() => removeTodo(index)}
        >
          Remove
        </button>
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