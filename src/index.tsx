import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { apolloClient } from "./graphql";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);
