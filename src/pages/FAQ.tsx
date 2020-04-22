import React from 'react';
import NavBar from "../components/navigation/NavBar";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
const logo = require('../images/laptop-near-teal-stethoscope-in-wooden-table-3758756.jpg')

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '58%',
      position: 'absolute',
      left: '21%'
    },
    expansionPanel: {
      backgroundColor: 'transparent',
      boxShadow: '0 1px 1px -1px #233768',
      borderColor: 'none',
      margin: "0 auto" 
    },
    title: {
      color: "#233768",
      fontWeight: "bolder",
      textAlign: 'center',
      padding: '30px',
      fontSize: '20px',
      fontFamily: 'Verdana'
    },
    heading: {
      fontSize: '18px',
      color: "#233768",
      fontFamily: 'Verdana'
    },
    answer: {
      fontSize: '14px',
      fontFamily: 'Verdana',
      color: '#5b5b5b'
    },
    ul: {
      listStyle: "none",
    },
    background: {
      position: "absolute",
      float: "left",
      opacity: '20%'
    },
    lines: {
      transform: 'translateY(9px)'
    }
  }),
);

export default function FAQ() {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <img src={String(logo)} style={{ width: '100%' }} className={classes.background} alt='laptop' />
      <div className={classes.title}>FAQ</div>
      <div className={classes.root}>
        
        <ExpansionPanel className={classes.expansionPanel}>
          <ExpansionPanelSummary
            expandIcon={<ClearIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Can I buy medical supplies from Medline.io?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.answer}>
              <p>
                Nope. This platform is purely for posting, organising and listing medical supply needs in order
                to more effectively connect them with folks that can meet those requirements in the most 
                efficient and effective way possible. Its matchmaking for medical supplies. There is no buy & sell /
                transactions happening on the site.
              </p>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
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
              <p>
                Well, we don't make any money. MedLine.io is a grassroots not-for-profit initiative. The
                platform is built and operated by generous and highly skilled volunteers from all over the
                world.
              </p>
              <p>
                Also, we do not sell ad spaces for advertising revenue, and we absolutely do not sell community
                members' information - which are not provided to any 3rd parties by site operators.
              </p>
              <p>
                We do receive some donations to help keep the platform up and running. If you’d like to learn more 
                about volunteering or donations, click [here] or [Contact Us].
              </p>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel className={classes.expansionPanel}>
          <ExpansionPanelSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>How do you prioritise "Needs"?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.answer}>
              <p>
                Right now, we are prioritizing Needs based on the information shared by users. Members fill in
                Urgency level when posting medical supply requirements. The 5 Urgency Levels are listed as:
              </p>
              <p>
                Level 1: Life threatening now. Need immediate supplies.<br/>
                Level 2: Supply needs are required within 1 week.<br/>
                Level 3: Supply needs are required within 2 weeks.<br/>
                Level 4: Forecast needs will be required within 3-4 weeks.<br/>
                Level 5: Good to have supplies just in case, but send to others with more needs first.
              </p>
              <p>
                We ask that all posters try to be as accurate as possible in terms of quantities, timeframe and 
                urgency requirements so that people with truly pressing needs for immediate support can be identified
                and helped first.
              </p>  
              <p>  
                Meanwhile, we are looking into more sophisticated methods for developing "urgency prioritization". For
                example, how might we develop accurate modelling of where needs might crop up next, based on spreading
                trends of the virus vs available healthcare centers in the area; along with number of hospital beds,
                ventilators, doctors, nurses, etc.?
              </p>  
              <p>
                If you have relevant expertise and ideas that could help with this. Please let us know! [contact link]
              </p>    
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
            <Typography className={classes.heading}>What are "Leads"?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.answer}>
              Leads can be any individual or organization that has medical supplies in stock and available to ship.
              These can include personal volunteers, NGOs, distributors and distribution businesses, as well as 
              manufacturers.
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
            <Typography className={classes.heading}>Are the Leads / Suppliers certified?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.answer}>
              <p>
                Unfortunately, no; since Leads can also be individual volunteers, the platform is not able to certify
                Leads stocks at this time. However, the Leads list has highlighted suppliers that have already
                effectively shipped to another member on the platform. These shipments have been verified by recipients
                and the Leads are marked with a green flag.
              </p>
              <p>
                In addition, we're working on enabling Leads to upload photos of their products, stocks, certifications
                and licenses, etc. But these cannot be verified by platform volunteers at this time.
              </p>
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
            <Typography className={classes.heading}>Who's using the platform?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.answer}>
              <p>Our community members consist of:</p>
              <p>
                Medical Personnel<br/>
                Healthcare Organisations<br/>
                Volunteers / NGOs<br/>
                Supply Distributors<br/>
                Supply Manufacturers
              </p>
              <p>If you know anyone that may benefit from this site. Please share with them.</p>
              <p>MedLine.io is 100% free to use and takes just a few minutes to post Needs / Leads!</p>
              <p>Here's our [link] and [social accounts].</p>
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
            <Typography className={classes.heading}>Are you related to MedlinePlus or Medline Industries?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.answer}>
              <p>
                Apologies for any confusion. MedLine.io is not related in any way to MedlinePlus or 
                Medline Industries. We don’t know them, and they don't know us (at least not yet).
              </p>
              <p>In case you're wondering, according to their websites:</p>
              <p>
                MedlinePlus is “an online health information resource” and “service of the National 
                Library of Medicine (NLM), the world’s largest medical library, which is part of the National
                Institues of Health (NIH).
                You can visit them at https://medlineplus.gov/
              </p>
              <p>
                Medline Industries is “the largest privately held manufacturer and distributor of medical supplies.” 
                You can vist them at https://www.medline.com/
              </p>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <hr />
      </div>
    </div>
  );
}



