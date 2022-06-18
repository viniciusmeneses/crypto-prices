import logo from "../../assets/images/logo.png";
import {
  AddAssetContainer,
  AddAssetForm,
  Asset,
  AssetsList,
  Card,
  Footer,
  Title,
  TitlesSection,
} from "../../components";
import { useAssetCodes } from "../../models/asset";
import {
  AssetsListSection,
  Container,
  FooterText,
  Header,
  LogoImg,
  Page,
  Subtitle,
  TermsAndConditionsText,
} from "./styles";

export const MainPage = () => {
  const assetCodes = useAssetCodes();

  return (
    <Page>
      <Container>
        <Header>
          <LogoImg src={logo} alt="Logo" title="Logo" />
        </Header>

        <TitlesSection>
          <Title color="white">
            Now you can track
            <br />
            all your cryptos here!
          </Title>
          <Subtitle>
            Just enter the <br />
            cryptocurrency code on the <br />
            form to the right.
          </Subtitle>
        </TitlesSection>

        <AddAssetContainer>
          <Card>
            <AddAssetForm onSuccess={({ assetCode }) => assetCodes.add(assetCode)} />

            <TermsAndConditionsText>
              Use of this service is subject to terms and conditions.
            </TermsAndConditionsText>
          </Card>
        </AddAssetContainer>

        {assetCodes.list.length > 0 && (
          <AssetsListSection>
            <AssetsList>
              {assetCodes.list.map((assetCode) => (
                <Asset
                  key={assetCode}
                  code={assetCode}
                  onRemove={() => assetCodes.remove(assetCode)}
                />
              ))}
            </AssetsList>
          </AssetsListSection>
        )}
      </Container>

      <Footer>
        <FooterText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue odio, accumsan quis
          viverra vel, bibendum quis elit. In hac habitasse platea dictumst. Proin consequat ex ex,
          sit amet blandit arcu lobortis ut. Cras ac leo mi. Curabitur finibus in nisl in pharetra.
          Suspendisse vitae hendrerit sapien, eget molestie tortor.
        </FooterText>
      </Footer>
    </Page>
  );
};
