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
    title: {
      color: "#233768",
      fontWeight: "bolder",
      textAlign: "center",
      padding: "30px",
      fontSize: "20px",
      fontFamily: "Verdana"
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
      <div className={classes.title}>Join Us</div>
      <div className={classes.root}>
        
      </div>
    </>
  );
}
