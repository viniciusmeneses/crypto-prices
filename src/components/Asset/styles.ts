import { opacify, transparentize } from "polished";
import styled from "styled-components";

import { Text } from "../Text";

export const StyledContainer = styled.li`
  display: flex;
`;

export const StyledData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2.5rem;
  flex: 1;
`;

export const StyledIcon = styled.img`
  width: 45px;
  height: auto;
`;

export const StyledCode = styled(Text).attrs({ color: "white", as: "span" })`
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 0.75rem;
`;

export const StyledRemoveButton = styled.button`
  background-color: #00000000;
  color: ${({ theme }) => theme.colors.whiteTransparent};
  border: none;
  font-size: 1.25rem;
  transition: ease 0.2s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => opacify(0.25, theme.colors.whiteTransparent)};
  }
`;
