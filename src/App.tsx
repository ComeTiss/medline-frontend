import React, { useMemo } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Switch } from "react-router";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router } from "react-router-dom";
import { useCookies } from "react-cookie";

import theme from "./MuiTheme";
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
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={apolloClient}>
        <Router>
          <Switch>
            <Routes />
          </Switch>
        </Router>
      </ApolloProvider>
    </MuiThemeProvider>
  );
}

export default App;
