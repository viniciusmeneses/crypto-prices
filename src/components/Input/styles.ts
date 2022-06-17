import styled from "styled-components";

import { Text } from "../Text";
import { InputProps, LabelProps } from ".";

export const StyledContainer = styled.div<{ fullWidth?: boolean }>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  position: relative;
`;

export const StyledLabel = styled.label<LabelProps>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  left: 0.5rem;
  top: 0.8rem;
  padding: 0 0.5rem;
  box-sizing: content-box;
  transition: ease 0.2s;
  pointer-events: none;
  letter-spacing: 0.05rem;

  color: ${({ focus, invalid, theme }) => {
    if (focus) return theme.colors.primary;
    if (invalid) return theme.colors.error;
    return theme.colors.gray;
  }};

  ${({ shrink }) => shrink && `top: -0.40rem; font-size: 0.7rem;`}
`;

export const StyledInput = styled.input<InputProps>`
  padding: 0.8rem 1rem;
  font-weight: 500;
  transition: box-shadow 0.2s ease;
  border: 1px solid;
  border-radius: 0.25rem;
  border-color: ${({ theme, error }) => (error ? theme.colors.error : theme.colors.gray)};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  &:focus-visible {
    outline: transparent solid 2px;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledErrorText = styled(Text).attrs({ as: "span" })`
  color: ${({ theme }) => theme.colors.error};
  font-weight: 400;
  margin: 0 1rem;
  padding-top: 0.5rem;
  font-size: 0.7rem;
  letter-spacing: 0.05rem;
`;
