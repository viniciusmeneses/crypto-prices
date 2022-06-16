import { FormEvent, useCallback, useState } from "react";

import { useAssetLastPriceLazyQuery } from "../../graphql/generated";
import { Input } from "../Input";
import { StyledButton } from "./styles";

export interface AddAssetFormProps {
  onSuccess?: (data: { assetCode: string }) => void;
  onError?: (error: { assetCode: string; message: string }) => void;
}

export const AddAssetForm = ({ onSuccess, onError }: AddAssetFormProps) => {
  const [assetCode, setAssetCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onFormError = useCallback(
    (message: string) => {
      setErrorMessage(message);
      onError?.({ assetCode, message });
    },
    [setErrorMessage, onError],
  );

  const [getAssetLastPrice, { loading }] = useAssetLastPriceLazyQuery({
    onCompleted: ({ markets }) => {
      const anyMarketPrice = markets.some((market) => market.ticker?.lastPrice);
      if (anyMarketPrice) {
        setAssetCode("");
        onSuccess?.({ assetCode });
      } else {
        onFormError("Invalid cryptocurrency code");
      }
    },
    onError: () => onFormError("Failed to fetch cryptocurrency"),
  });

  const onSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      setErrorMessage("");

      if (loading || assetCode.length === 0) return;
      getAssetLastPrice({ variables: { code: assetCode, currency: "EUR" } });
    },
    [assetCode, onError],
  );

  return (
    <form onSubmit={onSubmit}>
      <Input
        name="assetCode"
        label="CRYPTOCURRENCY CODE"
        value={assetCode}
        onChange={(event) => setAssetCode(event.target.value.toUpperCase())}
        fullWidth
      />

      <StyledButton type="submit" loading={loading} fullWidth>
        Add
      </StyledButton>

      {errorMessage}
    </form>
  );
};
