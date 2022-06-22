import styled from "styled-components";

const StyledIcon = styled.img`
  max-width: 32px;
  margin: 32px 64px;
  position: absolute;
  right: 0;
`;

const StyledContainer = styled.div`
  display: grid;
  margin: 96px auto 0;
  grid-template-columns: 1fr 1fr;
  max-width: 1000px;
  padding: 0 32px;
`;

const StyledTitle = styled.p`
  font-size: var(--fs-h900);
  color: var(--n10);
  margin: 0;
`;

export { StyledIcon, StyledContainer, StyledTitle };
