import "normalize.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

import { PropsWithChildren } from "react";
import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from "styled-components";

export const theme = {
  colors: {
    primary: "#fd4b24",
    white: "#fff",
    gray: "#cbced1",
    black: "#000",
    error: "#ff3838",
  },
};

export const ThemeProvider = (props: PropsWithChildren) => (
  <StyledThemeProvider theme={theme} {...props} />
);

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: "Roboto", sans-serif;
    box-sizing: border-box;
  }
`;
