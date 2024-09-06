// src/components/TodoForm/TodoForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todoSlice';
import styles from './TodoForm.module.css';

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo({ id: Date.now(), text, completed: false }));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={styles.input}
        placeholder="Add a new todo..."
      />
      <button type="submit" className={styles.button}>
        Add
      </button>
    </form>
  );
};

export default TodoForm;
