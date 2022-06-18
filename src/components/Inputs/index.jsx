import React from "react";
import { StyledContactInput } from "./styles";

const ContactInput = ({ type = "text", placeholder, required = false }) => {
  return (
    <StyledContactInput
      type={type}
      placeholder={placeholder}
      required={required}
    />
  );
};

export { ContactInput };
