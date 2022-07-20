import React, { useState } from "react";
import { EMAIL_API } from "../../api/endpoints";
import { ContactFormUI } from "./interface";

const ContactForm = () => {
  const [status, setStatus] = useState("Active");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const resetForm = () => {
    const form = formData;
    const keys = Object.keys(form);

    keys.forEach((key) => {
      form[key] = "";
    });

    setFormData(form);
  };

  const resetButton = () => {
    setTimeout(() => {
      setStatus("Active");
    }, 2000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Loading");

    const content = JSON.stringify({
      name: formData.name,
      email: formData.email,
      message: formData.message,
      _template: "table",
    });

    try {
      const response = await fetch(EMAIL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: content,
      });

      console.log(response);
      if (response.ok) {
        setStatus("Success");
        resetForm();
      } else {
        setStatus("Failure");
      }
    } catch (error) {
      console.error(error);
      setStatus("Failure");
    }
    resetButton();
  };

  const handleChange = (target, payload) => {
    setFormData({ ...formData, [payload]: target.value });
  };

  return (
    <ContactFormUI
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      formData={formData}
      status={status}
    />
  );
};

export { ContactForm };
