import { StyledText } from "./styles";

export interface IText {
  children: string;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  margin?: string;
  padding?: string;
}

function Text(props: IText) {
  const { children, as = "p", margin = "0px", padding = "0px" } = props;
  return (
    <StyledText as={as} margin={margin} padding={padding}>
      {children}
    </StyledText>
  );
}

export { Text };
