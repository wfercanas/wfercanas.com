import React from "react";

import { StyledCategory, StyledCategoryLabel } from "./styles";

const Category = ({ label }) => {
  return (
    <StyledCategory>
      <StyledCategoryLabel>{label}</StyledCategoryLabel>
    </StyledCategory>
  );
};

export { Category };
