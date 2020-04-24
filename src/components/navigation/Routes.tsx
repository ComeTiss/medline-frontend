import React from "react";
import routes from "../../routes/routes";
import { Route } from "react-router";
import { useCookies } from "react-cookie";
import Logout from "../../pages/Logout";
import { isAuthenticated } from "../../utils/authentication/AuthUtils";

function Routes() {
  const [cookies] = useCookies();
  const isUserLoggedIn = isAuthenticated(cookies);
  return (
    <>
      {routes.map(route => {
        return (
          <Route
            key={route.name}
            {...route}
            component={
              route.protected && !isUserLoggedIn ? Logout : route.component
            }
          />
        );
      })}
    </>
  );
}

export default Routes;
