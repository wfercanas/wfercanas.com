import styled from "styled-components";

const StyledContactInput = styled.input`
  padding: 8px 16px;
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

export { StyledContactInput };
