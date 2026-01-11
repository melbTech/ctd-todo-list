import { useRef } from 'react';
import { useState } from 'react';

function TodoForm(props) {
  const todoTitleInput = useRef('');
  const [workingTodoTitle, setWorkingTodo] = useState('');

  function handleAddTodo(event) {
    // prevent the page from refreshing when a user clicks the Add Todo button
    event.preventDefault();
    const title = event.target.title.value;
    props.onAddTodo(workingTodoTitle);
    setWorkingTodo('');

    todoTitleInput.current.focus();
  }

  return (
    <form onSubmit={handleAddTodo} action="">
      <label htmlFor="todoTitle">Todo</label>
      <input
        type="text"
        id="todoTitle"
        name="title"
        ref={todoTitleInput}
        value={workingTodoTitle}
        onChange={(event) => setWorkingTodo(event.target.value)}
      />
      <button type="submit" disabled={workingTodoTitle === ''}>
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
