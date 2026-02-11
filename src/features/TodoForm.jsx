import { useRef } from 'react';
import { useState } from 'react';
import TextInputWithLabel from '../shared/TextInputWithLabel';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 8px 0px;
`;

const StyledButton = styled.button`
  padding: 4px 10px;
  font-size: 24px;

  &:disabled {
    font-style: italic;
  }
`;

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
    <StyledForm onSubmit={handleAddTodo}>
      <TextInputWithLabel
        ref={todoTitleInput}
        value={workingTodoTitle}
        onChange={(event) => setWorkingTodo(event.target.value)}
        elementId="todoTitle"
        label="Todo"
      />

      <StyledButton type="submit" disabled={workingTodoTitle === ''}>
        {isSaving ? 'Saving...' : '+'}
      </StyledButton>
    </StyledForm>
  );
}

export default TodoForm;
