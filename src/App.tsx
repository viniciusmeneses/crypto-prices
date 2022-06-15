import { ApolloProvider } from "@apollo/client";

import { GlobalStyles } from "./GlobalStyles";
import { apolloClient } from "./graphql";
import { MainPage } from "./pages";

export const App = () => (
  <ApolloProvider client={apolloClient}>
    <GlobalStyles />
    <MainPage />
  </ApolloProvider>
);
