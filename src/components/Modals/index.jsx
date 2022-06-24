import React from "react";
import ReactDOM from "react-dom";

import xmark from "../../assets/icons/xmark.png";
import { Blanket } from "../Blankets";
import { ContactForm } from "../Forms";

import { StyledIcon, StyledContainer, StyledTitle } from "./styles";

const ContactModal = ({ setModal }) => {
  return ReactDOM.createPortal(
    <Blanket>
      <StyledIcon
        src={xmark}
        alt="Cross icon for exit"
        onClick={() => setModal(false)}
      />
      <StyledContainer>
        <StyledTitle>Let's Connect</StyledTitle>
        <ContactForm />
      </StyledContainer>
    </Blanket>,
    document.getElementById("modal")
  );
};

export { ContactModal };
