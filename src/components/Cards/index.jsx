import React from "react";

import {
  StyledArticle,
  StyledTitle,
  StyledDate,
  StyledFigure,
  StyledImage,
  StyledFigcaption,
} from "./styles";

const HeroCard = ({ title, date, image, alt, figcaption = "" }) => {
  return (
    <StyledArticle>
      <StyledTitle>{title}</StyledTitle>
      <StyledDate>{date}</StyledDate>
      <StyledFigure>
        <StyledImage src={image} alt={alt} />
        <StyledFigcaption>{figcaption}</StyledFigcaption>
      </StyledFigure>
    </StyledArticle>
  );
};

export { HeroCard };
