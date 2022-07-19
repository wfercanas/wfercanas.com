import React from "react";
import { StyledContactInput } from "./styles";

const ContactInput = ({
  id,
  type = "text",
  placeholder,
  required = false,
  value,
  handleChange,
}) => {
  return (
    <StyledContactInput
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={({ target }) => handleChange(target, id)}
      required={required}
    />
  );
};

export { ContactInput };
