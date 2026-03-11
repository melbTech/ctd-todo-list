import TodoList from '../features/TodoList/TodoList.jsx';
import TodoForm from '../features/TodoForm.jsx';
import TodoViewForm from '../features/TodosViewForm.jsx';
import styles from '../App.module.css';

function TodosPage({
  todoState,
  dispatch,
  addTodo,
  completeTodo,
  updateTodo,
  sortField,
  setSortField,
  sortDirection,
  setSortDirection,
  queryString,
  setQueryString,
}) {
  return (
    <>
      <h2>Melvin Todos</h2>
      <TodoForm onAddTodo={addTodo} isSaving={todoState.isSaving}></TodoForm>

      <TodoList
        todoList={todoState.todoList}
        onCompleteTodo={completeTodo}
        onUpdateTodo={updateTodo}
        isLoading={todoState.isLoading}
      ></TodoList>

      <hr />

      <TodoViewForm
        sortField={sortField}
        setSortField={setSortField}
        sortDirection={sortDirection}
        setSortDirection={setSortDirection}
        queryString={queryString}
        setQueryString={setQueryString}
      />
    </>
  );
}

export default TodosPage;
