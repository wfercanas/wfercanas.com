import { ReactElement } from "react";
import { StyledFigure } from "./styles";
import { Stack } from "../../layout/Stack";

interface IFigure {
  children: ReactElement | ReactElement[];
}

function Figure(props: IFigure) {
  const { children } = props;
  return (
    <StyledFigure>
      <Stack direction="column" alignItems="center" gap="8px">
        {children}
      </Stack>
    </StyledFigure>
  );
}

export { Figure };
