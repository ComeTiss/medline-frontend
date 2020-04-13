import React, { useState } from "react";
import NavBar from "../components/navigation/NavBar";
import AuthenticationLayout from "../components/authentication/AuthenticationLayout";
import { login } from "../service/rest/apis";
import { Redirect } from "react-router-dom";

function Login() {
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState<boolean>(false);

  const onSubmit = (data: any) => {
    login(data)
      .then(() => {
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
