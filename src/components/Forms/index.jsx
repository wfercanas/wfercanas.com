import React from "react";
import { SubmitButton } from "../Buttons";
import { ContactInput } from "../Inputs";
import { ContactTextarea } from "../Textareas";

import { StyledContactForm } from "./styles";

const ContactForm = () => {
  return (
    <StyledContactForm>
      <ContactInput type="text" placeholder="Name" required={true} />
      <ContactInput type="email" placeholder="Email" required={true} />
      <ContactTextarea placeholder="Message" required={true} maxlength={200} />
      <SubmitButton label="Send" />
    </StyledContactForm>
  );
};

export { ContactForm };
