import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledArticle = styled.article`
  cursor: pointer;
  padding: 8px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledCover = styled.img`
  max-width: 48px;
  height: fit-content;

  @media screen and (max-width: 700px) {
    max-width: 40px;
  }

  @media screen and (max-width: 500px) {
    max-width: 32px;
  }
`;

export { StyledArticle, StyledLink, StyledCover };
