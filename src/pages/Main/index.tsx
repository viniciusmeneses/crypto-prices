import { useCallback, useState } from "react";

import logo from "../../assets/images/logo.svg";
import { AddAssetForm, AddAssetFormProps, Asset, Title } from "../../components";
import {
  AddAssetCard,
  AssetsList,
  AssetsListSection,
  Container,
  Footer,
  FooterText,
  Header,
  LogoImg,
  Page,
  Subtitle,
  TermsAndConditionsText,
  TitlesSection,
} from "./styles";

const removeAssetCode = (assetCodes: string[], code: string) =>
  assetCodes.filter((assetCode) => code !== assetCode);

export const MainPage = () => {
  const [assetCodes, setAssetCodes] = useState<string[]>([]);

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

        <AddAssetCard>
          <AddAssetForm
            onSuccess={({ assetCode }) =>
              setAssetCodes((codes) => [assetCode, ...removeAssetCode(codes, assetCode)])
            }
          />

          <TermsAndConditionsText>
            Use of this service is subject to terms and conditions.
          </TermsAndConditionsText>
        </AddAssetCard>

        <AssetsListSection>
          {assetCodes.length > 0 && (
            <AssetsList>
              {assetCodes.map((assetCode) => (
                <Asset
                  key={assetCode}
                  code={assetCode}
                  onRemove={() => setAssetCodes((codes) => removeAssetCode(codes, assetCode))}
                />
              ))}
            </AssetsList>
          )}
        </AssetsListSection>
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
