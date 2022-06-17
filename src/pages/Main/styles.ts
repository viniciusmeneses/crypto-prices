import { transparentize } from "polished";
import styled from "styled-components";

import background from "../../assets/images/background.png";
import figure from "../../assets/images/figure.png";
import { Text, Title } from "../../components";

export const Page = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const LogoImg = styled.img`
  width: 220px;
  height: auto;
`;

export const Header = styled.header`
  margin-bottom: 3rem;
  width: 100%;
`;

export const Subtitle = styled(Title).attrs({
  as: "h2",
  color: "whiteTransparent",
})`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 2.25rem;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  flex: 1;

  width: 100%;
  padding: 2rem 8rem 2rem 8rem;
  height: 100%;

  background-color: #2a0a4a;
  background-image: url(${figure}), url(${background});
  background-repeat: no-repeat, no-repeat;
  background-position: 45% 100%, 70vw 0%;
  background-size: 30rem, contain;

  @media (max-width: 1485px) {
    & {
      background-size: 25rem, contain;
      background-position: 45% 100%, 70vw 0%;
    }
  }

  @media (max-width: 1370px) {
    & {
      background-size: 20rem, contain;
      background-position: calc(100% - 8rem) 100%, 70vw 0%;
    }
  }

  @media (max-width: 1000px) {
    & {
      flex-wrap: nowrap;
      justify-content: flex-start;
      flex-direction: column;
      background-image: none, url(${background});
    }
  }

  @media (max-width: 768px) {
    & {
      padding: 2rem 3rem 2rem 3rem;
    }
  }
`;

export const TitlesSection = styled.section`
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

export const AddAssetContainer = styled.div`
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

export const TermsAndConditionsText = styled(Text).attrs({
  color: "gray",
})`
  margin-top: 2rem;
  text-align: center;
  font-weight: 300;
`;

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 3.5rem 10rem 2rem 10rem;

  @media (max-width: 1000px) {
    & {
      padding: 3.5rem 8rem 2rem 8rem;
    }
  }

  @media (max-width: 768px) {
    & {
      padding: 3.5rem 3rem 2rem 3rem;
    }
  }
`;

export const FooterText = styled(Text).attrs({
  color: "gray",
})`
  font-size: 0.9rem;
`;

export const AssetsListSection = styled.section`
  width: 100%;
`;

export const AssetsList = styled.ul`
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
