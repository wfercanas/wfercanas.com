import React from "react";

import { StyledMoreAnchor } from "./styles";

const MoreAnchor = ({ label, href }) => {
  return <StyledMoreAnchor href={href}>{label}...</StyledMoreAnchor>;
};

export { MoreAnchor };
