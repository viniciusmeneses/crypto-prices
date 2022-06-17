import "normalize.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

import { ApolloProvider } from "@apollo/client";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { apolloClient } from "./graphql";
import { MainPage } from "./pages";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: "Roboto", sans-serif;
    box-sizing: border-box;
  }
`;

export const App = () => (
  <ApolloProvider client={apolloClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainPage />
    </ThemeProvider>
  </ApolloProvider>
);
