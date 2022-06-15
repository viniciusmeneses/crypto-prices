import { ButtonHTMLAttributes } from "react";
import { SpinnerCircularFixed } from "spinners-react";

import { StyledButton } from "./styles";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean;
  loading?: boolean;
};

export const Button = ({ children, loading = false, disabled = false, ...props }: ButtonProps) => (
  <StyledButton type="button" disabled={disabled || loading} {...props}>
    {loading ? (
      <SpinnerCircularFixed
        size="1.25rem"
        thickness={200}
        speed={200}
        role="img"
        color="#fff"
        secondaryColor="transparent"
      />
    ) : (
      children
    )}
  </StyledButton>
);
