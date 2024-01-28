import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  text-align: right;
  margin: 0 auto 60px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;

export { StyledHeader, StyledLink };
