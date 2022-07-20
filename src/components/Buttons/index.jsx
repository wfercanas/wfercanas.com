import React from "react";

import { StyledSubmitButton } from "./styles";
import { Spinner } from "../Spinners";

const SubmitButton = ({ label = "Submit", status = "Active" }) => {
  let text = "";

  switch (status) {
    case "Success":
      text = "Nice!";
      break;
    case "Failure":
      text = "Retry";
      break;
    default:
      text = label;
  }

  return (
    <StyledSubmitButton status={status} disabled={status !== "Active"}>
      {status === "Loading" ? <Spinner size="16" /> : text}
    </StyledSubmitButton>
  );
};

export { SubmitButton };
