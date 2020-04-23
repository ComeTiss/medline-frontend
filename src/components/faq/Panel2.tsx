import React, { Component } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import classes from "*.module.css";

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
    title: {
      color: "#233768",
      fontWeight: "bolder",
      textAlign: "center",
      padding: "30px",
      fontSize: "20px",
      fontFamily: "Verdana"
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
    ul: {
      listStyle: "none"
    },
    background: {
      position: "absolute",
      float: "left",
      opacity: "20%"
    },
    lines: {
      transform: "translateY(-1px)"
    },
    expandIcon: {
      "&$expanded": {
        transform: "translateY(-15%) rotate(45deg)"
      }
    },
    expanded: {}
  })
);

// export default function Panel() {
//   let classes = useStyles();  
//     return (
//       <ExpansionPanel className={classes.expansionPanel} square={true}>
//         <ExpansionPanelSummary
//           classes={{
//             expandIcon: classes.expandIcon,
//             expanded: classes.expanded
//           }}
//           expandIcon={<AddIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
//           <Typography className={classes.heading}>
//             Can I buy medical supplies from Medline.io?
//           </Typography>
//         </ExpansionPanelSummary>
//         <ExpansionPanelDetails>
//           <Typography className={classes.answer} component="p">
//             Nope. This platform is purely for posting, organising and listing
//             medical supply needs in order to more effectively connect them
//             with folks that can meet those requirements in the most efficient
//             and effective way possible. Its matchmaking for medical supplies.
//             There is no buy & sell / transactions happening on the site.
//           </Typography>
//         </ExpansionPanelDetails>
//       </ExpansionPanel>
//     );
  
// }



class Panel extends Component<{ name: string }, {}> {
  classes = useStyles();  
  render() {
    return (
      <div >
        {this.props.name}
      </div>
      
    )
  }
}

export default Panel; 