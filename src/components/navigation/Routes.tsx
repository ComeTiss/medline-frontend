import React from "react";
import routes from "../../routes/routes";
import { Route } from "react-router";
import { useCookies } from "react-cookie";
import {
  ACCESS_TOKEN_COOKIE_NAME,
  USER_ID_COOKIE_NAME
} from "../../utils/constants";
import Logout from "../../pages/Logout";

function Routes() {
  const [cookies] = useCookies();
  const access_token = cookies[ACCESS_TOKEN_COOKIE_NAME];
  const userId = cookies[USER_ID_COOKIE_NAME];
  const isUserLoggedIn = !!access_token && !!userId;
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
