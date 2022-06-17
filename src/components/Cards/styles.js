import styled from "styled-components";

const StyledArticle = styled.article``;

const StyledTitle = styled.h1`
  color: var(--n900);
  font-size: var(--fs-h900);
  line-height: var(--lh-h900);
  margin: 0 0 16px;
`;

const StyledDate = styled.p`
  font-size: var(--fs-h600);
  line-height: var(--lh-h600);
  color: var(--n400);
  margin: 0 0 32px;
`;

const StyledFigure = styled.figure`
  margin: 0;
  max-width: 1000px;
`;

const StyledImage = styled.img`
  max-width: 100%;
`;

const StyledFigcaption = styled.figcaption`
  text-align: center;
  color: var(--n400);
`;

export {
  StyledArticle,
  StyledTitle,
  StyledDate,
  StyledFigure,
  StyledImage,
  StyledFigcaption,
};
