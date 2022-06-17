import { InputHTMLAttributes, LabelHTMLAttributes, useState } from "react";

import { StyledContainer, StyledErrorText, StyledInput, StyledLabel } from "./styles";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  fullWidth?: boolean;
  error?: string;
};

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  focus: boolean;
  shrink: boolean;
  invalid: boolean;
};

export const Input = ({
  label,
  name,
  value,
  error,
  fullWidth = false,
  onFocus,
  onBlur,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <StyledContainer fullWidth={fullWidth}>
      {label && (
        <StyledLabel
          htmlFor={name}
          shrink={isFocused || Boolean(value)}
          focus={isFocused}
          invalid={Boolean(error)}
        >
          {label}
        </StyledLabel>
      )}
      <StyledInput
        type="text"
        id={name}
        name={name}
        value={value}
        error={error}
        fullWidth={fullWidth}
        onFocus={(event) => {
          setIsFocused(true);
          onFocus?.(event);
        }}
        onBlur={(event) => {
          setIsFocused(false);
          onBlur?.(event);
        }}
        {...props}
      />

      {error && <StyledErrorText>{error}</StyledErrorText>}
    </StyledContainer>
  );
};
