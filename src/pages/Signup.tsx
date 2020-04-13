import React from "react";
import NavBar from "../components/navigation/NavBar";
import AuthenticationLayout from "../components/authentication/AuthenticationLayout";

function Signup() {
  return (
    <>
      <NavBar />
      <AuthenticationLayout title="Sign-up" confirmPassword submitError="" />
    </>
  );
}

export default Signup;
