import React from "react";
import { Route } from "react-router";
import Logout from "../../pages/Logout";

type Props = {
  route: any;
  isUserLoggedIn: boolean;
};

function ProtectedRoute(props: Props) {
  const { isUserLoggedIn, route } = props;

  return (
    <Route {...route} component={!isUserLoggedIn ? Logout : route.component} />
  );
}

export default ProtectedRoute;
