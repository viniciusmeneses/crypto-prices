import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem 8rem 2rem 8rem;

  @media (max-width: 768px) {
    & {
      padding: 2rem 3rem 2rem 3rem;
    }
  }
`;
