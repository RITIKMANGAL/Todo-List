// src/components/TodoItem/TodoItem.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete, updateTodo } from '../../redux/todoSlice';
import styles from './TodoItem.module.css';

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleToggle = () => {
    dispatch(toggleComplete(todo.id));
  };

  const handleEdit = () => {
    if (isEditing && newText.trim()) {
      dispatch(updateTodo({ id: todo.id, text: newText }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className={styles.checkbox}
        />
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className={styles.editInput}
          />
        ) : (
          <span className={todo.completed ? styles.completed : ''}>{todo.text}</span>
        )}
      </div>
      <button onClick={handleEdit} className={styles.editButton}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button onClick={handleDelete} className={styles.deleteButton}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
