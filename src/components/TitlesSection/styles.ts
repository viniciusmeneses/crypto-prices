import styled from "styled-components";

export const StyledTitlesSection = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;

  & > * {
    margin-top: 1rem;
  }

  @media (max-width: 1000px) {
    & {
      flex: 0;
      margin: 0;
    }
  }
`;
