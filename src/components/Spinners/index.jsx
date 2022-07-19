import React from "react";

import { StyledSpinner } from "./styles";
import spinner from "../../assets/icons/spinner.svg";

const Spinner = () => {
  return <StyledSpinner src={spinner} alt="Spinner" />;
};

export { Spinner };
