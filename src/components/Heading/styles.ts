import styled from "styled-components";

import { HeadingProps } from ".";

export const StyledHeading = styled.p<HeadingProps>`
  color: ${({ color, theme }) => color ?? theme.colors.black};
  font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return "2rem";
      default:
        return "4rem";
    }
  }};
`;
