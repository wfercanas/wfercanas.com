import React from "react";

import {
  StyledNavbar,
  StyledNavbarContainer,
  StyledNameContainer,
  StyledName,
  StyledListContainer,
  StyledList,
  StyledListItem,
} from "./styles";

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavbarContainer>
        <StyledNameContainer>
          <StyledName>wfercanas</StyledName>
        </StyledNameContainer>
        <StyledListContainer>
          <StyledList>
            <StyledListItem>articles</StyledListItem>
            <StyledListItem>projects</StyledListItem>
            <StyledListItem>contact</StyledListItem>
          </StyledList>
        </StyledListContainer>
      </StyledNavbarContainer>
    </StyledNavbar>
  );
};

export { Navbar };
