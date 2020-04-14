import React from "react";
import routes from "../../routes/routes";
import ProtectedRoute from "./ProtectedRoute";
import { Route } from "react-router";
import { useCookies } from "react-cookie";

function Routes() {
  const [cookies] = useCookies();
  const isUserLoggedIn = !!cookies["token"];
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
