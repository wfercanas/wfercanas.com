import React from "react";

import { StyledSection, StyledSectionTitle } from "./styles";

const Section = ({ children, label, divider = false }) => {
  return (
    <StyledSection divider={divider}>
      <StyledSectionTitle>{label}/</StyledSectionTitle>
      {children}
    </StyledSection>
  );
};

export { Section };
