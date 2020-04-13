import React from "react";
import { Route, Switch } from "react-router";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router } from "react-router-dom";

import routes from "./routes/routes";
import { client } from "./service/apollo/client";

const Routes = routes.map(route => <Route key={route.name} {...route} />);

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>{Routes}</Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
