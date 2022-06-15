import { graphql } from "msw";
import { setupServer } from "msw/node";

import { AssetLastPriceQuery } from "../graphql/generated";

export const graphqlHandlers = [
  graphql.query<AssetLastPriceQuery>("AssetLastPrice", (_, res, ctx) =>
    res(
      ctx.data({
        __typename: "Query",
        markets: [
          {
            __typename: "Market",
            marketSymbol: "Bitfinex",
            ticker: { __typename: "Ticker", lastPrice: "20000.00" },
          },
          {
            __typename: "Market",
            marketSymbol: "FTX",
            ticker: { __typename: "Ticker", lastPrice: "21000.00" },
          },
        ],
      }),
    ),
  ),
];

export const graphqlServer = setupServer(...graphqlHandlers);
