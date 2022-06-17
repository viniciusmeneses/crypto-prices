import { ApolloProvider } from "@apollo/client";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { PropsWithChildren, ReactElement } from "react";
import { ThemeProvider } from "styled-components";

import { apolloClient } from "../graphql";
import { theme } from "../theme";

const AllProviders = ({ children }: PropsWithChildren) => (
  <ApolloProvider client={apolloClient}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </ApolloProvider>
);

export const render = (ui: ReactElement, options?: RenderOptions) =>
  rtlRender(ui, { wrapper: AllProviders, ...options });
