import styled from "styled-components";

const StyledSection = styled.section`
  max-width: 1000px;
  margin: 100px auto 0;
  padding-bottom: 80px;
  border-bottom: ${({ divider }) => (divider ? "2px solid var(--n300)" : "0")};
`;

const StyledSectionTitle = styled.p`
  color: var(--n300);
  font-size: var(--fs-h700);
  line-height: var(--lh-h700);
`;

export { StyledSection, StyledSectionTitle };
