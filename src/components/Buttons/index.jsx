import React from "react";

import { StyledSubmitButton } from "./styles";

const SubmitButton = ({ label = "Submit" }) => {
  return <StyledSubmitButton>{label}</StyledSubmitButton>;
};

export { SubmitButton };
