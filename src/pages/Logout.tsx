import React from "react";
import { Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";

function Logout() {
  const [, setCookies] = useCookies();
  setCookies("access_token", null);
  return <Redirect to="/login" />;
}

export default Logout;
