import React from "react";
import { Redirect } from "react-router-dom";

function Logout() {
  return <Redirect to="/login" />;
}

export default Logout;
