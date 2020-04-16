import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Redirect } from "react-router-dom";

import NavBar from "../components/navigation/NavBar";
import AuthenticationLayout from "../components/authentication/AuthenticationLayout";
import { login } from "../service/rest/apis";

function Login() {
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState<boolean>(false);
  const [, setCookies] = useCookies();

  const onSubmit = (data: any) => {
    login(data)
      .then(resp => {
        setCookies("access_token", resp.data.token);
        setRedirect(true);
      })
      .catch((error: any) => {
        const errorMsg = error?.response?.data?.error;
        setError(errorMsg);
      });
  };

  return (
    <>
      {redirect && <Redirect to="/" />}
      <NavBar />
      <AuthenticationLayout
        title="Login"
        submitError={error}
        onSubmit={onSubmit}
      />
    </>
  );
}

export default Login;
