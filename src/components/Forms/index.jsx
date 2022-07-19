import React from "react";
import { useState } from "react";
import { EMAIL_API } from "../../api/endpoints";

import { SubmitButton } from "../Buttons";
import { ContactInput } from "../Inputs";
import { ContactTextarea } from "../Textareas";

import { StyledContactForm } from "./styles";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(EMAIL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _template: "table",
        }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (target, payload) => {
    setFormData({ ...formData, [payload]: target.value });
  };

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
      <SubmitButton label="Send" />
    </StyledContactForm>
  );
};

export { ContactForm };
