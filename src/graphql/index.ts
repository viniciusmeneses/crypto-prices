import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const link = new HttpLink({
  uri: process.env.REACT_APP_API_URL,
  fetch: (...args) => fetch(...args),
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  link,
  cache,
});
