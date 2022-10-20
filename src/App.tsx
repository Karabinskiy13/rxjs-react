import React from 'react';
import TodoForm from './components/TodoForm';
import TodoInfo from './components/TodoInfo';
import TodoList from './components/TodoList';

const App = () => (
  <div className="App">
    <TodoInfo />
    <TodoForm />
    <TodoList />
  </div>
);

export default App;
