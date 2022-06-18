import styled from "styled-components";

const StyledTextarea = styled.textarea`
  padding: 8px 16px;
  min-width: 400px;
  height: 220px;
  resize: none;
  font-size: var(--fs-h700);
  border: none;
  border-bottom: 2px solid var(--n10);
  color: var(--n10);
  background-color: transparent;
  outline: none;

  &::placeholder {
    color: var(--n10);
    font-weight: 300;
    opacity: 1;
  }
`;

export { StyledTextarea };
