import React from "react";
import NavBar from "../components/navigation/NavBar";
import MainButton from "../components/custom-components/MainButton";

function Home() {
  return (
    <>
      <NavBar showLogout />
      <h1>Home page</h1>
      <MainButton>Hello button!</MainButton>
    </>
  );
}

export default Home;
