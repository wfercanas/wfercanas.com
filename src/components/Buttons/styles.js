import styled from "styled-components";

const StyledSubmitButton = styled.button`
  padding: 8px 72px;
  font-size: var(--fs-h600);
  transition: width 500ms linear;
  width: ${({ status }) => (status === "Active" ? "200px" : "250px")};
  border: none;
  color: var(--n10);
  background-color: ${({ status }) => {
    switch (status) {
      case "Success":
        return "var(--t200)";
      case "Failure":
        return "var(--r500)";
      case "Loading":
        return "var(--n40)";
      default:
        return "var(--g200)";
    }
  }};
`;

export { StyledSubmitButton };
