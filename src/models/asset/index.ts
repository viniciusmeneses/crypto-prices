import { useCallback, useState } from "react";

import { AssetLastPriceQuery } from "../../graphql/generated";

export const useAssetCodes = () => {
  const [codes, setCodes] = useState<string[]>([]);

  const remove = useCallback(
    (oldCode: string) => setCodes((codes) => codes.filter((code) => code !== oldCode)),
    [setCodes],
  );

  const add = useCallback(
    (newCode: string) => {
      remove(newCode);
      setCodes((codes) => [newCode, ...codes]);
    },
    [setCodes, remove],
  );

  return { list: codes, add, remove };
};

export const findAssetPrice = (markets: AssetLastPriceQuery["markets"]) => {
  const market = markets.find((market) => market.ticker?.lastPrice);
  const lastPrice = market?.ticker?.lastPrice;
  if (lastPrice) return parseFloat(lastPrice);
};
