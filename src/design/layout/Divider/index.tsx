import { Stack } from "../Stack";
import { StyledContainer, StyledDot } from "./styles";

function Divider() {
  return (
    <StyledContainer>
      <Stack justifyContent="space-around">
        <StyledDot />
        <StyledDot />
        <StyledDot />
      </Stack>
    </StyledContainer>
  );
}

export { Divider };
