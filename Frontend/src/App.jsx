// src/App.jsx
import React from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
