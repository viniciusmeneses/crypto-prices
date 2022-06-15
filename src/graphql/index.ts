import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { BatchHttpLink } from "@apollo/client/link/batch-http";

const link = new HttpLink({ uri: process.env.REACT_APP_API_URL });
const batchLink = new BatchHttpLink({ uri: process.env.REACT_APP_API_URL });

export const apolloClient = new ApolloClient({
  link: process.env.NODE_ENV === "test" ? link : batchLink,
  cache: new InMemoryCache(),
});
