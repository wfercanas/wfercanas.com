import styled from "styled-components";

const StyledHero = styled.article``;

const StyledHeroTitle = styled.h1`
  color: var(--n900);
  font-size: var(--fs-h900);
  line-height: var(--lh-h900);
  margin: ${({ date }) => (date ? "0 0 16px" : "0 0 64px")};
`;

const StyledHeroDate = styled.p`
  font-size: var(--fs-h600);
  line-height: var(--lh-h600);
  color: var(--n400);
  margin: 0 0 32px;
`;

const StyledHeroFigure = styled.figure`
  margin: 0;
  max-width: 1000px;
`;

const StyledHeroImage = styled.img`
  max-width: 100%;
`;

const StyledFigcaption = styled.figcaption`
  display: ${({ showCaption }) => (showCaption ? "block" : "none")};
  text-align: center;
  color: var(--n400);
`;

const StyledArticle = styled.article`
  display: flex;
  gap: 32px;
  max-width: 1000px;
`;

const StyledArticleImage = styled.img`
  max-width: 280px;
`;

const StyledArticleDescription = styled.div``;

const StyledArticleTitle = styled.h2`
  color: var(--n900);
  margin: 0 0 16px;
  font-size: var(--fs-h800);
  line-height: var(--lh-h800);
`;

const StyledArticleDate = styled.p`
  margin: 0;
  color: var(--n400);
`;

const StyledCategoriesList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
  margin-top: 32px;
`;

const StyledCategoriesListItem = styled.li``;

export {
  StyledHero,
  StyledHeroTitle,
  StyledHeroDate,
  StyledHeroFigure,
  StyledHeroImage,
  StyledFigcaption,
  StyledArticle,
  StyledArticleImage,
  StyledArticleDescription,
  StyledArticleTitle,
  StyledArticleDate,
  StyledCategoriesList,
  StyledCategoriesListItem,
};
