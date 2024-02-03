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
  width: 48px;
  height: 48px;

  @media screen and (max-width: 700px) {
    width: 40px;
    height: 40px;
  }

  @media screen and (max-width: 500px) {
    width: 32px;
    height: 32px;
  }
`;

export { StyledArticle, StyledLink, StyledCover };
