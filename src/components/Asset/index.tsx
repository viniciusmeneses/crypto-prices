import { useMemo } from "react";

import cup from "../../assets/images/cup.svg";
import { AssetLastPriceQuery, useAssetLastPriceQuery } from "../../graphql/generated";
import { findAssetPrice } from "../../models/asset";
import { Text } from "../Text";
import { StyledCode, StyledContainer, StyledData, StyledIcon, StyledRemoveButton } from "./styles";

export interface AssetProps {
  code: string;
  onRemove: () => void;
}

const AssetPrice = ({ markets }: AssetLastPriceQuery) => {
  const price = useMemo(() => findAssetPrice(markets)?.toFixed(2), [JSON.stringify(markets)]);
  return <>{price ? `${price} €` : "Failed to load price"}</>;
};

export const Asset = ({ code, onRemove }: AssetProps) => {
  const { data, loading } = useAssetLastPriceQuery({
    variables: { code, currency: "EUR" },
  });

  return (
    <StyledContainer>
      <StyledIcon src={cup} alt="Icon" title="Icon" />

      <StyledData>
        <StyledCode>{code}</StyledCode>
        <Text as="span" color="whiteTransparent">
          {loading ? "Loading..." : <AssetPrice markets={data?.markets ?? []} />}
        </Text>
      </StyledData>

      <StyledRemoveButton onClick={onRemove}>&times;</StyledRemoveButton>
    </StyledContainer>
  );
};
