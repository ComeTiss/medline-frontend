import React from "react";
import NavBar from "../components/navigation/NavBar";
import { createStyles, makeStyles } from "@material-ui/core/styles";
const logo = require("../media/join_us_background.jpg");

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "80%",
      position: "absolute",
      left: "10%"
    },
    background: {
      position: "absolute",
      float: "left",
      zIndex: -1
    },
    title: {
      color: "#233768",
      fontWeight: "bolder",
      textAlign: "center",
      padding: "30px",
      fontSize: "20px",
      fontFamily: "Verdana"
    },
    intro_text: {
      color: "#5b5b5b",
      fontWeight: "bolder",
      textAlign: "center",
      fontSize: "18px",
      fontFamily: "Verdana"
    },
    outro_text: {
      color: "white",
      fontWeight: "bolder",
      textAlign: "center",
      fontSize: "18px",
      fontFamily: "Verdana"
    }
  })
);

export default function JoinUs() {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <img
        src={String(logo)}
        style={{ width: "100%" }}
        className={classes.background}
        alt="latex_gloves"
      />
      <div className={classes.title}>Join Us</div>
      <div className={classes.root}>
        <div className={classes.intro_text}>
          Would you like to join our international team of talented volunteers
          developing, operating and optimising&nbsp;
          <span style={{ color: "#233768" }}>Medline.io</span> in our ongoing
          efforts to support front-line medical personnel fighting against
          COVID-19?
          <br />
          Your help is greatly appreciated through:
        </div>

        <div className={classes.outro_text}>
          If you are, or know of credible transport, customs, quality control or
          other service providers that can facilitate efficient and effective
          delivery of medical supplies in the best interest of all parties,
          please contact us. We are currently building a database and will make
          it available to the public soon.
        </div>
      </div>
    </>
  );
}
