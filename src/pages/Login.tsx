import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Redirect } from "react-router-dom";

import NavBar from "../components/navigation/NavBar";
import AuthenticationLayout from "../components/authentication/AuthenticationLayout";
import { login } from "../service/rest/apis";
import { ACCESS_TOKEN_COOKIE_NAME } from "../utils/constants";

const VERIFY_PATH = "/verify";
const HOME_PATH = "/";

type RedirectPath = typeof VERIFY_PATH | typeof HOME_PATH | null;

function Login() {
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState<RedirectPath>(null);
  const [, setCookies] = useCookies();

  const onSubmit = (data: any) => {
    login(data)
      .then(response => {
        setRedirect(HOME_PATH);
        setCookies(ACCESS_TOKEN_COOKIE_NAME, response?.data?.token);
      })
      .catch((error: any) => {
        const errorMsg = error?.response?.data?.error;
        if (error?.response?.data?.requireEmailValidation) {
          setRedirect(VERIFY_PATH);
        } else {
          setError(errorMsg);
        }
      });
  };

  return (
    <>
      {redirect && <Redirect to={redirect} />}
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
