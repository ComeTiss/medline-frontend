import React from "react";
import NavBar from "../components/navigation/NavBar";
import AuthenticationLayout from "../components/authentication/AuthenticationLayout";

function Login() {
  return (
    <>
      <NavBar />
      <AuthenticationLayout title="Login" submitError="" />
    </>
  );
}

export default Login;
