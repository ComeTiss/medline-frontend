import React from "react";
import NavBar from "../components/navigation/NavBar";
import { Typography } from '@material-ui/core';


function Home() {
  return (
    <>
      <NavBar showLogout />
      <Typography variant="h3" component="h1" align="center" color="primary">About Us</Typography>
    </>
  );
}

export default Home;
