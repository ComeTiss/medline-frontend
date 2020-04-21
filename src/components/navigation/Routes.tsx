import React from "react";
import routes from "../../routes/routes";
import ProtectedRoute from "./ProtectedRoute";
import { Route } from "react-router";
import { useCookies } from "react-cookie";
import {
  ACCESS_TOKEN_COOKIE_NAME,
  USER_ID_COOKIE_NAME
} from "../../utils/constants";

function Routes() {
  const [cookies] = useCookies();
  const isUserLoggedIn = !!(
    cookies[ACCESS_TOKEN_COOKIE_NAME] && cookies[USER_ID_COOKIE_NAME]
  );

  return (
    <>
      {routes.map(route => {
        return route.protected ? (
          <ProtectedRoute
            key={route.name}
            route={route}
            isUserLoggedIn={isUserLoggedIn}
          />
        ) : (
          <Route key={route.name} {...route} />
        );
      })}
    </>
  );
}

export default Routes;
