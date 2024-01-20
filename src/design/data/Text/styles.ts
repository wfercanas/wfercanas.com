import styled from "@emotion/styled";
import { IText } from ".";

const StyledText = styled.p<IText>`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

export { StyledText };
