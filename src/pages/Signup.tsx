import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Redirect } from "react-router-dom";

import NavBar from "../components/navigation/NavBar";
import AuthenticationLayout from "../components/authentication/AuthenticationLayout";
import { signup } from "../service/rest/apis";

function Signup() {
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState<boolean>(false);
  const [, setCookies] = useCookies();

  const onSubmit = (data: any) => {
    if (data?.password !== data?.confirmPassword) {
      setError("Invalid password confirmation.");
      return;
    }
    signup(data)
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
        title="Sign-up"
        isSignup
        submitError={error}
        onSubmit={onSubmit}
      />
    </>
  );
}

export default Signup;
