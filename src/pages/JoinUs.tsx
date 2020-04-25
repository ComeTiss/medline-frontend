import React from "react";
import NavBar from "../components/navigation/NavBar";
import { createStyles, makeStyles } from "@material-ui/core/styles";
const logo = require("../media/join_us_background.jpg");

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "58%",
      position: "absolute",
      left: "21%"
    },
    background: {
      position: "absolute",
      float: "left",
      opacity: "20%"
    }
  })
);


export default function JoinUs() {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <img
        src={ String(logo) }
        style={{ width: "100%" }}
        className={ classes.background }
        alt="latex_gloves"
      />
    </>
  );
}
