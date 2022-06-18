import React from "react";

import { StyledTextarea } from "./styles";

const ContactTextarea = ({ placeholder, required = false, maxlength }) => {
  return (
    <StyledTextarea
      placeholder={placeholder}
      required={required}
      maxLength={maxlength}
    />
  );
};

export { ContactTextarea };
