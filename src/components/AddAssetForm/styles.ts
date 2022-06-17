import styled from "styled-components";

import { Button } from "../Button";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledSubmitButton = styled(Button).attrs({ type: "submit" })`
  margin-top: 0.75rem;
`;
