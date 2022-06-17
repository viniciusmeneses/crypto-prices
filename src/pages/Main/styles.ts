import { transparentize } from "polished";
import styled from "styled-components";

import background from "../../assets/images/background.png";
import figure from "../../assets/images/figure.png";
import { Card, Text, Title } from "../../components";

export const Page = styled.main`
  min-width: 100vw;
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
  background-position: 33vw 100%, 70vw 100%;
  background-size: 30vw, contain;
`;

export const TitlesSection = styled.section`
  display: flex;
  flex-direction: column;

  & > * {
    margin-top: 1rem;
  }
`;

export const AddAssetCard = styled(Card)`
  width: 25rem;
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
  margin: 2rem 0 0 0;
  padding: 0 1rem 0 0;
  overflow-y: auto;
  max-height: 17rem;
  width: min-content;

  & > li {
    width: 19rem;
    border-bottom: 1px solid ${({ theme }) => transparentize(0.3, theme.colors.whiteTransparent)};
    padding: 1rem 0;
  }
`;
