import styled from 'styled-components';

const StyledInput = styled.input`
  font-size: 16px;
  padding: 8px;
  width: 80%;
`;

function TextInputWithLabel({ elementId, label, onChange, ref, value }) {
  return (
    <>
      <label htmlFor={elementId}></label>
      <StyledInput
        type="text"
        id={elementId}
        ref={ref}
        value={value}
        placeholder="Enter todo.."
        onChange={onChange}
      />
    </>
  );
}

export default TextInputWithLabel;
