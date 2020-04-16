import React, { useMemo } from "react";
import { Switch } from "react-router";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router } from "react-router-dom";
import { useCookies } from "react-cookie";
import CssBaseline from "@material-ui/core/CssBaseline";

import { getApolloClient } from "./service/apollo/client";
import Routes from "./components/navigation/Routes";

function App() {
  const [cookies] = useCookies();
  const apolloClient = useMemo(() => getApolloClient(cookies["access_token"]), [
    cookies
  ]);

  return (
    <>
      <CssBaseline />
      <ApolloProvider client={apolloClient}>
        <Router>
          <Switch>
            <Routes />
          </Switch>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
