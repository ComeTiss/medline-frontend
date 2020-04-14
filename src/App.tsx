import React from "react";
import { Switch } from "react-router";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router } from "react-router-dom";

import { client } from "./service/apollo/client";
import Routes from "./components/navigation/Routes";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Routes />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
