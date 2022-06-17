import { useMemo } from "react";

import cupIcon from "../../assets/images/cupIcon.svg";
import { useAssetLastPriceQuery } from "../../graphql/generated";
import { Text } from "../Text";
import { StyledCode, StyledContainer, StyledData, StyledIcon, StyledRemoveButton } from "./styles";

export interface AssetProps {
  code: string;
  onRemove: () => void;
}

export const Asset = ({ code, onRemove }: AssetProps) => {
  const { data, loading, error } = useAssetLastPriceQuery({
    variables: { code, currency: "EUR" },
  });

  const price = useMemo(() => {
    const market = data?.markets.find((market) => market.ticker?.lastPrice);
    const lastPrice = market?.ticker?.lastPrice;
    if (lastPrice) return parseFloat(lastPrice).toFixed(2);
  }, [data]);

  return (
    <StyledContainer>
      <StyledIcon src={cupIcon} alt="Icon" title="Icon" />

      <StyledData>
        <StyledCode>{code}</StyledCode>
        <Text as="span" color="whiteTransparent">
          {loading ? "Loading..." : !price || error ? "Failed to load price" : `${price} €`}
        </Text>
      </StyledData>
      <StyledRemoveButton onClick={onRemove}>&times;</StyledRemoveButton>
    </StyledContainer>
  );
};
