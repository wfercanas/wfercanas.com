import React from "react";

import { SubmitButton } from "../Buttons";
import { ContactInput } from "../Inputs";
import { ContactTextarea } from "../Textareas";

import { StyledContactForm } from "./styles";

const ContactFormUI = ({ handleSubmit, handleChange, formData, status }) => {
  return (
    <StyledContactForm onSubmit={handleSubmit}>
      <ContactInput
        id="name"
        type="text"
        value={formData.name}
        placeholder="Name"
        required={true}
        handleChange={handleChange}
      />
      <ContactInput
        id="email"
        type="email"
        value={formData.email}
        placeholder="Email"
        required={true}
        handleChange={handleChange}
      />
      <ContactTextarea
        id="message"
        placeholder="Message"
        value={formData.message}
        required={true}
        handleChange={handleChange}
        maxlength={200}
      />
      <SubmitButton label="Send" status={status} />
    </StyledContactForm>
  );
};

export { ContactFormUI };
