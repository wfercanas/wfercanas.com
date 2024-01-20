import styled from "@emotion/styled";
import { IStack } from ".";

const StyledStack = styled.div<IStack>`
  display: flex;
  flex-direction: "row";
  flex-wrap: "nowrap";
  justify-content: "flex-start";
  align-items: "flex-start";
  align-content: "flex-start";
  gap: "0px";
`;

export { StyledStack };
