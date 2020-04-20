import React from 'react';
import NavBar from "../components/navigation/NavBar";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import { ProvidedRequiredArgumentsOnDirectivesRule } from 'graphql/validation/rules/ProvidedRequiredArgumentsRule';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '80%',
    },
    expansionPanel: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      borderColor: 'red',
      margin: "0 auto" 
    },
    title: {
      color: "#233768",
      fontWeight: "bolder",
      textAlign: 'center',
      padding: '20px',
      fontSize: '20px',
      fontFamily: 'Verdana'
    },
    heading: {
      fontSize: '24px',
      color: "#233768",
      fontFamily: 'Verdana'
    },
    answer: {
      fontSize: '18px',
      fontFamily: 'Verdana',
      color: '#5b5b5b'
    }
  }),
);

export default function FAQ() {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <div className={classes.title}>FAQ</div>
      <div className={classes.root}>
        <hr />
        <ExpansionPanel className={classes.expansionPanel}>
          <ExpansionPanelSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Can I buy medical supplies from Medline.io?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.answer}>
              Nope. This platform is purely for posting, organising and listing medical supply needs in order
              to more effectively connect them with folks that can meet those requirements in the most 
              efficient and effective way possible. Its matchmaking for medical supplies. There is no buy & sell /
              transactions happening on the site.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <hr />
        <ExpansionPanel className={classes.expansionPanel}>
          <ExpansionPanelSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Then how does MedLine.io make money?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.answer}>
              Well, we don't make any money. MedLine.io is a grassroots not-for-profit initiative. The
              platform is built and operated by generous and highly skilled volunteers from all over the
              world.
              Also, we do not sell ad spaces for advertising revenue, and we absolutely do not sell community
              members' information - which are not provided to any 3rd parties by site operators.
              We do receive some donations to help keep the platform up and running. If you’d like to learn more 
              about volunteering or donations, click [here] or [Contact Us].

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <hr />
      </div>
    </div>
  );
}

// How do you prioritise "Needs"?
// Right now, we are prioritizing Needs based on the information shared by users. Members fill in
// Urgency level when posting medical supply requirements. The 5 Urgency Levels are listed as:
// Level 1: Life threatening now. Need immediate supplies.
// Level 2: Supply needs are required within 1 week.
// Level 3: Supply needs are required within 2 weeks.
// Level 4: Forecast needs will be required within 3-4 weeks.
// Level 5: Good to have supplies just in case, but send to others with more needs first.

// We ask that all posters try to be as accurate as possible in terms of quantities, timeframe and 
// urgency requirements so that people with truly pressing needs for immediate support can be identified
// and helped first.

// Meanwhile, we are looking into more sophisticated methods for developing "urgency prioritization". For
// example, how might we develop accurate modelling of where needs might crop up next, based on spreading
// trends of the virus vs available healthcare centers in the area; along with number of hospital beds,
// ventilators, doctors, nurses, etc.?


// What are "Leads"?
// Leads can be any individual or organization that has medical supplies in stock and available to ship.
// These can include personal volunteers, NGOs, distributors and distribution businesses, as well as 
// manufacturers.



// Are the Leads / Suppliers certified?
// Unfortunately, no; since Leads can also be individual volunteers, the platform is not able to certify
// Leads stocks at this time. However, the Leads list has highlighted suppliers that have already
// effectively shipped to another member on the platform. These shipments have been verified by recipients
// and the Leads are marked with a green flag.

// In addition, we're working on enabling Leads to upload photos of their products, stocks, certifications
// and licenses, etc. But these cannot be verified by platform volunteers at this time.


// Who's using the platform?




// Are you related to MedlinePlus or Medline Industries?