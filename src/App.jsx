import './App.css';
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import { useState } from 'react';

function App() {
  const [newTodo, setNewTodo] = useState('Example Text');
  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm></TodoForm>
      <p>{newTodo}</p>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
