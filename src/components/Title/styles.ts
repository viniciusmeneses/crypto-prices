import styled from "styled-components";

import { TitleProps } from ".";

export const StyledTitle = styled.h1<TitleProps>`
  color: ${({ color, theme }) => (color ? theme.colors[color] ?? color : theme.colors.black)};
  font-size: 2.75rem;
  font-weight: 400;
  margin: 0;
  line-height: 3.5rem;
`;
