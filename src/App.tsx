import React, { useMemo } from "react";
import { Switch } from "react-router";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router } from "react-router-dom";
import { useCookies } from "react-cookie";

import { getApolloClient } from "./service/apollo/client";
import Routes from "./components/navigation/Routes";
import { ACCESS_TOKEN_COOKIE_NAME } from "./utils/constants";

function App() {
  const [cookies] = useCookies();
  const apolloClient = useMemo(
    () => getApolloClient(cookies[ACCESS_TOKEN_COOKIE_NAME]),
    [cookies]
  );

  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <Switch>
          <Routes />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
