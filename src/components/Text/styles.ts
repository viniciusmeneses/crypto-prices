import styled from "styled-components";

import { TextProps } from ".";

export const StyledText = styled.p<TextProps>`
  color: ${({ color, theme }) => color ?? theme.colors.black};
  font-size: ${({ size }) => {
    switch (size) {
      case "large":
        return "2rem";
      case "small":
        return "0.75rem";
      default:
        return "1rem";
    }
  }};
`;
