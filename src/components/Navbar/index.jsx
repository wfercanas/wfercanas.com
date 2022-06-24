import React from "react";

import {
  StyledNavbar,
  StyledNavbarContainer,
  StyledNameContainer,
  StyledName,
  StyledListContainer,
  StyledList,
  StyledListItem,
  StyledLink,
} from "./styles";

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavbarContainer>
        <StyledNameContainer>
          <StyledName>
            <StyledLink to="/">wfercanas</StyledLink>
          </StyledName>
        </StyledNameContainer>
        <StyledListContainer>
          <StyledList>
            <StyledListItem>
              <StyledLink to="/articles">articles</StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink to="/projects">projects</StyledLink>
            </StyledListItem>
            <StyledListItem>contact</StyledListItem>
          </StyledList>
        </StyledListContainer>
      </StyledNavbarContainer>
    </StyledNavbar>
  );
};

export { Navbar };
