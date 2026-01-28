import { useEffect, useState } from 'react';

function TodosViewForm({
  sortField,
  setSortField,
  sortDirection,
  setSortDirection,
  queryString,
  setQueryString,
}) {
  const preventRefresh = (e) => e.preventDefault();

  const [localQueryString, setLocalQueryString] = useState(queryString);

  useEffect(() => {
    const debounce = setTimeout(() => setQueryString(localQueryString), 500);

    return () => clearTimeout(debounce);
  }, [localQueryString, setQueryString]);

  return (
    <form className="filterForm" onSubmit={preventRefresh}>
      {/* Search Todos */}
      <div className="FilterOptions">
        <label htmlFor="searchTodos">Search todos</label>
        <input
          id="searchTodos"
          type="text"
          value={localQueryString}
          onChange={(e) => {
            setLocalQueryString(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            setLocalQueryString('');
          }}
        >
          Clear
        </button>
      </div>

      {/* Sort Todos */}
      <div>
        <label htmlFor="sortField">Sort by</label>
        <select
          name="sortField"
          id="sortField"
          onChange={(e) => {
            setSortField(e.target.value);
          }}
          value={sortField}
        >
          <option value="title">Title</option>
          <option value="createdTime">Time added</option>
        </select>
        <label htmlFor="sortDirection">Direction</label>
        <select
          name="sortDirection"
          id="sortDirection"
          value={sortDirection}
          onChange={(e) => {
            setSortDirection(e.target.value);
          }}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </form>
  );
}

export default TodosViewForm;
