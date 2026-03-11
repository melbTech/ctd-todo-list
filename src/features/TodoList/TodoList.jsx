import TodoListItem from './TodoListItem';
import styles from './TodoList.module.css';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

function TodoList({ todoList, onCompleteTodo, onUpdateTodo, isLoading }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const filteredTodoList = todoList.filter((todo) => todo.isCompleted !== true);

  const itemsPerPage = 8;
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  const totalPages = Math.ceil(filteredTodoList.length / itemsPerPage);

  const indexOfFirstTodo = (currentPage - 1) * itemsPerPage;
  const indexOfLastTodo = indexOfFirstTodo + itemsPerPage;

  const currentTodos = filteredTodoList.slice(
    indexOfFirstTodo,
    indexOfLastTodo
  );

  const handlePreviousPage = () => {
    const prevPage = Math.max(currentPage - 1, 1);
    setSearchParams({ page: String(prevPage) });
  };

  const handleNextPage = () => {
    const nextPage = Math.min(currentPage + 1, totalPages);
    setSearchParams({ page: String(nextPage) });
  };

  useEffect(() => {
    if (totalPages > 0) {
      const invalid =
        Number.isNaN(currentPage) ||
        currentPage < 1 ||
        currentPage > totalPages;

      if (invalid) {
        navigate('/');
      }
    }
  }, [currentPage, totalPages, navigate]);

  if (isLoading) {
    return <p>Todo list loading...</p>;
  }

  return (
    <>
      {filteredTodoList.length === 0 ? (
        <p>Add todo above to get started</p>
      ) : (
        <>
          <ul className={styles.item}>
            {currentTodos.map((todo) => (
              <TodoListItem
                key={todo.id}
                todo={todo}
                onCompleteTodo={onCompleteTodo}
                onUpdateTodo={onUpdateTodo}
              />
            ))}
          </ul>

          <div className={styles.paginationControls}>
            <button
              type="button"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              {' '}
              Previous
            </button>

            <span>
              Page {currentPage} of {totalPages}
            </span>

            <button
              type="button"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
}
export default TodoList;
