import { ApolloProvider } from "@apollo/client";

import { apolloClient } from "./graphql";
import { MainPage } from "./pages";
import { GlobalStyles, ThemeProvider } from "./Theme";

export const App = () => (
  <ApolloProvider client={apolloClient}>
    <ThemeProvider>
      <GlobalStyles />
      <MainPage />
    </ThemeProvider>
  </ApolloProvider>
);
