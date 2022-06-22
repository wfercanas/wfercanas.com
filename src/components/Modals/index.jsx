import React from "react";

import xmark from "../../assets/icons/xmark.png";
import { Blanket } from "../Blankets";
import { ContactForm } from "../Forms";

import { StyledIcon, StyledContainer, StyledTitle } from "./styles";

const ContactModal = () => {
  return (
    <Blanket>
      <StyledIcon src={xmark} alt="Cross icon for exit" />
      <StyledContainer>
        <StyledTitle>Let's Connect</StyledTitle>
        <ContactForm />
      </StyledContainer>
    </Blanket>
  );
};

export { ContactModal };
