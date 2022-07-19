import styled, { keyframes } from "styled-components";

const StyledPage = styled.div`
  min-height: calc(100vh - 200px);
`;

const StyledHero = styled.div`
  margin-bottom: 120px;
`;

const StyledArticles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledAnchor = styled.div`
  margin-top: 72px;
  text-align: right;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinnerContainer = styled.div`
  height: calc(100vh - 200px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSpinner = styled.img`
  animation: ${rotate} 2s linear infinite;
`;

export {
  StyledPage,
  StyledHero,
  StyledArticles,
  StyledAnchor,
  StyledSpinnerContainer,
  StyledSpinner,
};
