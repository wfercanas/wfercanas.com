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
  max-width: 64px;
  height: fit-content;
`;

export { StyledArticle, StyledLink, StyledCover };
