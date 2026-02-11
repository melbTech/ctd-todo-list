import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  padding: 8px 0px;
`;

const StyledSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  margin-bottom: 10px;
`;

const StyledSort = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledInput = styled.input`
  font-size: 14px;
  padding: 6px;
  width: 85%;
`;

const StyledButton = styled.button`
  padding: 4px 10px;
  font-size: 20px;
`;

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
    <StyledForm className="filterForm" onSubmit={preventRefresh}>
      {/* Search Todos */}
      <StyledSearch className="FilterOptions">
        {/* <label htmlFor="searchTodos">Search todos</label> */}
        <StyledInput
          id="searchTodos"
          type="text"
          placeholder="Search todo.."
          value={localQueryString}
          onChange={(e) => {
            setLocalQueryString(e.target.value);
          }}
        />
        <StyledButton
          type="button"
          onClick={() => {
            setLocalQueryString('');
          }}
        >
          x
        </StyledButton>
      </StyledSearch>

      {/* Sort Todos */}
      <StyledSort>
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
        <label id="left" htmlFor="sortDirection">
          Direction
        </label>
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
      </StyledSort>
    </StyledForm>
  );
}

export default TodosViewForm;
