import React from "react";

import { StyledSpinner } from "./styles";
import spinner from "../../assets/icons/spinner.svg";

const Spinner = ({ size = "32" }) => {
  return <StyledSpinner src={spinner} size={size} alt="Spinner" />;
};

export { Spinner };
