import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";

type Props = {
  icon: any;
  title: string;
  content: any;
};

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      background: "rgba(255, 255, 255, 0.6)",
      padding: "10px",
      margin: "20px",
      width: "43%",
      display: "inline-block"
    },
    title: {
      color: "#233768",
      fontWeight: "bolder",
      textAlign: "center",
      fontSize: "20px",
      fontFamily: "Verdana"
    },
    content: {
      color: "#5b5b5b",
      fontSize: "15px",
      fontFamily: "Verdana"
    },
    icon: {
      width: "12%",
    },
    iconPara: {
      textAlign: "center"
    }
  })
);

export default function SpecArea(props: Props) {
  const classes = useStyles();
  const { icon, title, content } = props;

  return (
    <div className={classes.container}>
      <p className={classes.iconPara}><img src={icon} className={classes.icon} alt={title} /></p>
      <div className={classes.title}>{title}</div>
      <div className={classes.content}>{content}</div>
    </div>
  );
}

// style={{ width: "5%" }}