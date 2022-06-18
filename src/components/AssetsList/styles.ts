import { transparentize } from "polished";
import styled from "styled-components";

export const StyledAssetsList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-top: 2rem;
  padding: 0;
  padding-right: 1rem;
  overflow-y: auto;
  max-width: 20rem;
  max-height: 17rem;

  & > li {
    border-bottom: 1px solid ${({ theme }) => transparentize(0.3, theme.colors.whiteTransparent)};
    padding: 1rem 0;
  }

  @media (max-width: 1000px) {
    & {
      max-width: 100%;
      max-height: 100%;
    }
  }
`;
