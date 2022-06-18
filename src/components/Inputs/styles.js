import styled from "styled-components";

const StyledContactInput = styled.input`
  padding: 8px 16px;
  width: 100%;
  box-sizing: border-box;
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

export { StyledContactInput };
