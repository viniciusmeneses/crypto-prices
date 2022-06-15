import { darken } from "polished";
import styled from "styled-components";

import { ButtonProps } from ".";

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 0 2rem;
  border-radius: 2rem;
  min-height: 2rem;
  border: none;
  font-size: 1rem;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  opacity: ${({ disabled, loading }) => (disabled || loading ? 0.5 : 1)};
  transition: ease 0.2s;

  &:hover {
    background-color: ${({ theme }) => darken(0.2, theme.colors.primary)};
  }
`;
