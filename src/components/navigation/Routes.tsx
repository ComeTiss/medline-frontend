import React from "react";
import routes from "../../routes/routes";
import { Route } from "react-router";
import withAuthentication from "../hoc/withAuthentication";
import { withCookies } from "react-cookie";

function Routes() {
  return (
    <>
      {routes.map(route => {
        return (
          <Route
            key={route.name}
            {...route}
            component={
              route.protected
                ? withAuthentication(route.component)
                : route.component
            }
          />
        );
      })}
    </>
  );
}

export default Routes;
