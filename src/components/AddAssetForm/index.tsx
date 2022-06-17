import { FormEvent, useCallback, useState } from "react";

import { useAssetLastPriceLazyQuery } from "../../graphql/generated";
import { Input } from "../Input";
import { StyledForm, StyledSubmitButton } from "./styles";

export interface AddAssetFormProps {
  onSuccess: (data: { assetCode: string }) => void;
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

  const [getAssetLastPrice, { loading }] = useAssetLastPriceLazyQuery();

  const onSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      if (loading || assetCode.length === 0) return;

      const { data, error } = await getAssetLastPrice({
        variables: { code: assetCode, currency: "EUR" },
      });

      if (error) return onFormError("FAILED TO GET CRYPTOCURRENCY");

      const anyMarketPrice = data?.markets.some((market) => market.ticker?.lastPrice);
      if (!anyMarketPrice) return onFormError("INVALID CODE");

      setAssetCode("");
      onSuccess({ assetCode });
    },
    [assetCode, onError],
  );

  return (
    <StyledForm onSubmit={onSubmit}>
      <Input
        name="assetCode"
        label="CRYPTOCURRENCY CODE"
        value={assetCode}
        error={errorMessage}
        onChange={(event) => {
          setAssetCode(event.target.value.toUpperCase());
          setErrorMessage("");
        }}
        fullWidth
      />

      <StyledSubmitButton type="submit" loading={loading} fullWidth>
        Add
      </StyledSubmitButton>
    </StyledForm>
  );
};
