import { useRef } from 'react';
import { useState } from 'react';
import TextInputWithLabel from '../shared/TextInputWithLabel';

function TodoForm({ onAddTodo, isSaving }) {
  const todoTitleInput = useRef('');
  const [workingTodoTitle, setWorkingTodo] = useState('');

  function handleAddTodo(event) {
    // prevent the page from refreshing when a user clicks the Add Todo button
    event.preventDefault();

    const newTodo = {
      title: workingTodoTitle,
      isCompleted: false,
    };

    onAddTodo(newTodo);
    setWorkingTodo('');

    todoTitleInput.current.focus();
  }

  return (
    <form onSubmit={handleAddTodo}>
      <TextInputWithLabel
        ref={todoTitleInput}
        value={workingTodoTitle}
        onChange={(event) => setWorkingTodo(event.target.value)}
        elementId="todoTitle"
        label="Todo"
      />

      <button type="submit" disabled={workingTodoTitle === ''}>
        {isSaving ? 'Saving...' : 'Add Todo'}
      </button>
    </form>
  );
}

export default TodoForm;
