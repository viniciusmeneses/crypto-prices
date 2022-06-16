import styled from "styled-components";

import { TextProps } from ".";

export const StyledText = styled.p<TextProps>`
  color: ${({ color, theme }) => (color ? theme.colors[color] ?? color : theme.colors.black)};
  font-size: 1rem;
  font-weight: 300;
  margin: 0;
`;
