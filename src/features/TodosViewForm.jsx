function TodoViewForm({
  sortField,
  setSortField,
  sortDirection,
  setSortDirection,
  queryString,
  setQueryString,
}) {
  const preventRefresh = (e) => e.preventDefault();

  return (
    <form className="filterForm" onSubmit={preventRefresh}>
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

      {/* Search Todos */}
      <div className="FilterOptions">
        <label htmlFor="searchTodos">Search todos</label>
        <input
          id="searchTodos"
          type="text"
          value={queryString}
          onChange={(e) => {
            setQueryString(e.target.value);
          }}
        />
        <button type="button" onClick={() => setQueryString('')}>
          Clear
        </button>
      </div>
    </form>
  );
}

export default TodoViewForm;
