import styled from "styled-components";

import { InputProps, LabelProps } from ".";

export const StyledContainer = styled.div`
  position: relative;
`;

export const StyledLabel = styled.label<LabelProps>`
  position: absolute;
  color: #cbced1;
  background-color: #fff;
  font-weight: 400;
  left: 0.5rem;
  top: 0.8rem;
  padding: 0 0.3rem;
  box-sizing: content-box;
  transition: ease 0.2s;

  ${({ shrink }) =>
    shrink &&
    `
    top: -0.40rem;
    font-size: 0.70rem;
    letter-spacing: 0.05rem;
    `}
`;

export const StyledInput = styled.input<InputProps>`
  padding: 0.8rem;
  border-radius: 0.25rem;
  border: 1px solid #cbced1;
  font-weight: 500;
  transition: box-shadow 0.2s ease;

  &:focus-visible {
    outline: transparent solid 2px;
    box-shadow: 0 0 0 1px #cbced1;
  }
`;
