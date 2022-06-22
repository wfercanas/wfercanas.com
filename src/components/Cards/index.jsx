import React from "react";

import { CDN_API } from "../../utils/api";

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
      <StyledHeroTitle date={date}>{title}</StyledHeroTitle>
      {date && <StyledHeroDate>{date}</StyledHeroDate>}
      <StyledHeroFigure>
        <StyledHeroImage src={`${CDN_API}/w_1000${image}`} alt={alt} />
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
      <StyledArticleImage src={`${CDN_API}/w_500${image}`} alt={alt} />
      <StyledArticleDescription>
        <StyledArticleTitle>{title}</StyledArticleTitle>
        <StyledArticleDate>{date}</StyledArticleDate>
      </StyledArticleDescription>
    </StyledArticle>
  );
};

export { HeroCard, ArticleCard };
