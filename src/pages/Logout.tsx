import React from "react";
import { Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ACCESS_TOKEN_COOKIE_NAME } from "../utils/constants";

function Logout() {
  const [, setCookies] = useCookies();
  setCookies(ACCESS_TOKEN_COOKIE_NAME, null);
  return <Redirect to="/login" />;
}

export default Logout;
