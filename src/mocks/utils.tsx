import { ApolloProvider } from "@apollo/client";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { PropsWithChildren, ReactElement } from "react";

import { apolloClient } from "../graphql";
import { ThemeProvider } from "../Theme";

const AllProviders = ({ children }: PropsWithChildren) => {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider>{children}</ThemeProvider>
    </ApolloProvider>
  );
};

export const render = (ui: ReactElement, options?: RenderOptions) =>
  rtlRender(ui, { wrapper: AllProviders, ...options });
