import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";

type Props = {
  heading: string;
  answer: any;
  bottomPanel: boolean;
};

const useStyles = makeStyles(() =>
  createStyles({
    expansionPanel: {
      backgroundColor: "transparent",
      boxShadow: "0px -2px 1px -1px #233768"
    },
    expansionPanelBottom: {
      backgroundColor: "transparent",
      boxShadow: "0px -2px 1px -1px #233768, 0px 2px 1px -1px #233768"
    },
    heading: {
      fontSize: "18px",
      color: "#233768",
      fontFamily: "Verdana"
    },
    answer: {
      fontSize: "14px",
      fontFamily: "Verdana",
      color: "#5b5b5b"
    },
    expandIcon: {
      "&$expanded": {
        transform: "translateY(-15%) rotate(45deg)"
      }
    },
    expanded: {}
  })
);

export default function Panel(props: Props) {
  const classes = useStyles();
  const { heading, answer, bottomPanel } = props;
  return (
    <ExpansionPanel
      className={
        bottomPanel ? classes.expansionPanelBottom : classes.expansionPanel
      }
      square={true}
    >
      <ExpansionPanelSummary
        classes={{
          expandIcon: classes.expandIcon,
          expanded: classes.expanded
        }}
        expandIcon={<AddIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{heading}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography className={classes.answer} component="p">
          {answer}
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
