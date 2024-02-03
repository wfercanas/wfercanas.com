import { StyledFigcaption } from "./styles";

interface IFigcaption {
  children: string;
}

function Figcaption(props: IFigcaption) {
  const { children } = props;
  return <StyledFigcaption>{children}</StyledFigcaption>;
}

export { Figcaption };
