import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import todos from './data/todos';

function App() {
  const [todoItems, setTodoItems] = useState(todos);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem = {
        id: todoItems.length + 1,
        text: newTodo,
        completed: false,
      };
      setTodoItems([...todoItems, newTodoItem]);
      setNewTodo('');
    }
  };

  const handleToggleCompleted = (id) => {
    const updatedTodoItems = todoItems.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodoItems(updatedTodoItems);
  };

  const handleRemoveTodo = (id) => {
    const updatedTodoItems = todoItems.filter((todo) => todo.id !== id);
    setTodoItems(updatedTodoItems);
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <TodoList
        todoItems={todoItems}
        onToggleCompleted={handleToggleCompleted}
        onRemoveTodo={handleRemoveTodo}
      />
    </div>
  );
}

export default App;