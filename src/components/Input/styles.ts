import styled from "styled-components";

import { InputProps, LabelProps } from ".";

export const StyledContainer = styled.div`
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
  color: ${({ focus, theme }) => (focus ? theme.colors.primary : theme.colors.gray)};
  letter-spacing: 0.05rem;

  ${({ shrink }) => shrink && `top: -0.40rem; font-size: 0.70rem;`}
`;

export const StyledInput = styled.input<InputProps>`
  padding: 0.8rem 1rem;
  font-weight: 500;
  transition: box-shadow 0.2s ease;
  border: 1px solid;
  border-radius: 0.25rem;
  border-color: ${({ theme }) => theme.colors.gray};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  &:focus-visible {
    outline: transparent solid 2px;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
