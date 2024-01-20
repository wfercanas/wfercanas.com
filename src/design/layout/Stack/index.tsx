import { ReactElement } from "react";
import { StyledStack } from "./styles";

export interface IStack {
  children: ReactElement | ReactElement[];
  direction?: "row" | "column";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  alignContent?:
    | "normal"
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "space-between"
    | "space-around";
  gap?: string;
}

function Stack(props: IStack) {
  const {
    children,
    direction = "row",
    wrap = "nowrap",
    justifyContent = "flex-start",
    alignItems = "stretch",
    alignContent = "normal",
    gap = "0",
  } = props;
  return (
    <StyledStack
      direction={direction}
      wrap={wrap}
      justifyContent={justifyContent}
      alignItems={alignItems}
      alignContent={alignContent}
      gap={gap}
    >
      {children}
    </StyledStack>
  );
}

export { Stack };
