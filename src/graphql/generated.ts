import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Market = {
  __typename?: 'Market';
  marketSymbol: Scalars['String'];
  ticker: Maybe<Ticker>;
};

export type MarketsFilter = {
  baseSymbol: InputMaybe<StringFilter>;
  exchangeSymbol: InputMaybe<StringFilter>;
  quoteSymbol: InputMaybe<StringFilter>;
};

export type Query = {
  __typename?: 'Query';
  markets: Array<Market>;
};


export type QueryMarketsArgs = {
  filter: InputMaybe<MarketsFilter>;
};

export type StringFilter = {
  _eq: InputMaybe<Scalars['String']>;
  _neq: InputMaybe<Scalars['String']>;
};

export type Ticker = {
  __typename?: 'Ticker';
  highPrice: Scalars['String'];
  lastPrice: Scalars['String'];
  lowPrice: Scalars['String'];
};

export type AssetLastPriceQueryVariables = Exact<{
  code: InputMaybe<Scalars['String']>;
  currency: InputMaybe<Scalars['String']>;
}>;


export type AssetLastPriceQuery = { __typename?: 'Query', markets: Array<{ __typename?: 'Market', marketSymbol: string, ticker: { __typename?: 'Ticker', lastPrice: string } | null }> };


export const AssetLastPriceDocument = gql`
    query AssetLastPrice($code: String, $currency: String) {
  markets(
    filter: {baseSymbol: {_eq: $code}, quoteSymbol: {_eq: $currency}, exchangeSymbol: {_neq: "Binance"}}
  ) {
    marketSymbol
    ticker {
      lastPrice
    }
  }
}
    `;

/**
 * __useAssetLastPriceQuery__
 *
 * To run a query within a React component, call `useAssetLastPriceQuery` and pass it any options that fit your needs.
 * When your component renders, `useAssetLastPriceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAssetLastPriceQuery({
 *   variables: {
 *      code: // value for 'code'
 *      currency: // value for 'currency'
 *   },
 * });
 */
export function useAssetLastPriceQuery(baseOptions?: Apollo.QueryHookOptions<AssetLastPriceQuery, AssetLastPriceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AssetLastPriceQuery, AssetLastPriceQueryVariables>(AssetLastPriceDocument, options);
      }
export function useAssetLastPriceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AssetLastPriceQuery, AssetLastPriceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AssetLastPriceQuery, AssetLastPriceQueryVariables>(AssetLastPriceDocument, options);
        }
export type AssetLastPriceQueryHookResult = ReturnType<typeof useAssetLastPriceQuery>;
export type AssetLastPriceLazyQueryHookResult = ReturnType<typeof useAssetLastPriceLazyQuery>;
export type AssetLastPriceQueryResult = Apollo.QueryResult<AssetLastPriceQuery, AssetLastPriceQueryVariables>;