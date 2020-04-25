import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";

type Props = {
  icon: string;
  title: string;
  content: any;
};

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      color: "#233768",
      fontWeight: "bolder",
      textAlign: "center",
      padding: "30px",
      fontSize: "20px",
      fontFamily: "Verdana"
    },
    content: {
      color: "#5b5b5b",
      fontSize: "15px",
      fontFamily: "Verdana"
    }
  })
)

export default function SpecArea(props: Props) {
  const classes = useStyles();
  const { icon, title, content } = props;

  return (
    <div>
      <img
        src={icon}
        style={{ width: "100%" }}
        alt={title}
      />
      <div className={classes.title}>
        {title}
      </div>
      <div className={classes.content}>
        {content}
      </div>
    </div>
  );
}


