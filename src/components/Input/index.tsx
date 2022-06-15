import { FocusEvent, InputHTMLAttributes, LabelHTMLAttributes, useCallback, useState } from "react";

import { StyledContainer, StyledInput, StyledLabel } from "./styles";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
};

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  focus: boolean;
  shrink: boolean;
};

export const Input = ({ label, name, value, onFocus, onBlur, ...props }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const onInputFocus = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(event);
    },
    [onFocus],
  );

  const onInputBlur = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(event);
    },
    [onBlur],
  );

  return (
    <StyledContainer>
      {label && (
        <StyledLabel htmlFor={name} shrink={isFocused || Boolean(value)} focus={isFocused}>
          {label}
        </StyledLabel>
      )}
      <StyledInput
        type="text"
        id={name}
        name={name}
        value={value}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        {...props}
      />
    </StyledContainer>
  );
};
