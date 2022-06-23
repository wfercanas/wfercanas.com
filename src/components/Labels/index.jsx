import React from "react";

import { StyledCategory, StyledCategoryLabel } from "./styles";

const CategoryLabel = ({ label }) => {
  return (
    <StyledCategory>
      <StyledCategoryLabel>{label}</StyledCategoryLabel>
    </StyledCategory>
  );
};

export { CategoryLabel };
