import React, { useState } from "react";
import { EMAIL_API } from "../../api/endpoints";
import { ContactFormUI } from "./interface";

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
    <ContactFormUI
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      formData={formData}
    />
  );
};

export { ContactForm };
