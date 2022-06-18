import styled from "styled-components";

const StyledTextarea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  padding: 8px 16px;
  height: 220px;
  resize: none;
  font-size: var(--fs-h600);
  border: none;
  border-bottom: 2px solid var(--n10);
  color: var(--n10);
  background-color: transparent;
  outline: none;

  &::placeholder {
    color: var(--n10);
    opacity: 1;
  }
`;

export { StyledTextarea };
