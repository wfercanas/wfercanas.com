import React from "react";

import {
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
} from "./styles";

const HeroCard = ({
  title,
  date,
  image,
  alt,
  figcaption = "",
  showCaption = false,
}) => {
  return (
    <StyledHero>
      <StyledHeroTitle>{title}</StyledHeroTitle>
      <StyledHeroDate>{date}</StyledHeroDate>
      <StyledHeroFigure>
        <StyledHeroImage src={image} alt={alt} />
        <StyledFigcaption showCaption={showCaption}>
          {figcaption}
        </StyledFigcaption>
      </StyledHeroFigure>
    </StyledHero>
  );
};

const ArticleCard = ({ title, date, image, alt }) => {
  return (
    <StyledArticle>
      <StyledArticleImage src={image} alt={alt} />
      <StyledArticleDescription>
        <StyledArticleTitle>{title}</StyledArticleTitle>
        <StyledArticleDate>{date}</StyledArticleDate>
      </StyledArticleDescription>
    </StyledArticle>
  );
};

export { HeroCard, ArticleCard };
