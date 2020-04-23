import React from "react";

import {
  ACCESS_TOKEN_COOKIE_NAME,
  USER_ID_COOKIE_NAME
} from "../../utils/constants";
import { Redirect } from "react-router";
import { useCookies } from "react-cookie";

function withAuthentication(component: any) {
  const [cookies] = useCookies();
  const isUserLoggedIn = !!(
    cookies[ACCESS_TOKEN_COOKIE_NAME] && cookies[USER_ID_COOKIE_NAME]
  );
  if (!isUserLoggedIn) {
    return <Redirect to="/login" />;
  }
  return component;
}

export default withAuthentication;
