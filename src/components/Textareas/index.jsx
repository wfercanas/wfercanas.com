import React from "react";

import { StyledTextarea } from "./styles";

const ContactTextarea = ({
  id,
  placeholder,
  required = false,
  maxlength,
  value,
  handleChange,
}) => {
  return (
    <StyledTextarea
      id={id}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={({ target }) => handleChange(target, id)}
      maxLength={maxlength}
    />
  );
};

export { ContactTextarea };
