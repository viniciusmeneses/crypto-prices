import styled from "styled-components";

export const StyledAddAssetContainer = styled.div`
  width: 25rem;

  @media (max-width: 1280px) {
    & {
      flex: 1;
      width: auto;
      padding-left: 5rem;
    }
  }

  @media (max-width: 1000px) {
    & {
      padding: 0;
      margin-top: 2rem;
      flex: 0;
    }
  }
`;
