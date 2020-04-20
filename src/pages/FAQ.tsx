import React from 'react';
import NavBar from "../components/navigation/NavBar";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '80%',
      
    },
    title: {
      color: "#1a237e",
      textAlign: 'center'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
      color: "#1a237e",
    },
  }),
);

export default function FAQ() {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <div className={classes.title}>FAQ</div>
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Can I buy medical supplies from Medline.io?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nope. This platform is purely for posting, organising and listing medical supply needs in order
              to more effectively connect them with folks that can meet those requirements in the most 
              efficient and effective way possible. Its matchmaking for medical supplies. There is no buy & sell /
              transactions happening on the site.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Then how does MedLine.io make money?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        
        

        How do you prioritise "Needs"?
        What are "Leads"?
        Are the Leads / Suppliers certified?
        Who's using the platform?
        Are you related to MedlinePlus or Medline Industries?
      </div>
    </div>
  );
}
