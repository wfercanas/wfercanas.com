import styled from "styled-components";

const StyledSection = styled.section`
  max-width: 1000px;
  margin: 0 auto 100px;
  padding-bottom: 80px;
  border-bottom: ${({ divider }) => (divider ? "2px solid var(--n300)" : "0")};
`;

const StyledSectionTitle = styled.p`
  color: var(--n300);
  font-size: var(--fs-h800);
  line-height: var(--lh-h800);
`;

export { StyledSection, StyledSectionTitle };
