import { Stack } from "../Stack";
import { StyledContainer, StyledDot } from "./styles";

function Divider() {
  return (
    <StyledContainer>
      <Stack justifyContent="space-around">
        {Array(3).fill(<StyledDot />)}
      </Stack>
    </StyledContainer>
  );
}

export { Divider };
