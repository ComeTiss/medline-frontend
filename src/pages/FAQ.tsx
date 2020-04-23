import React from "react";
import NavBar from "../components/navigation/NavBar";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Panel from "../components/faq/Panel";
const logo = require("../images/laptop-near-teal-stethoscope-in-wooden-table-3758756.jpg");

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "58%",
      position: "absolute",
      left: "21%"
    },
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

export default function FAQ() {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <img
        src={String(logo)}
        style={{ width: "100%" }}
        className={classes.background}
        alt="laptop"
      />
      <div className={classes.title}>FAQ</div>
      <div className={classes.root}>
        <Panel 
          heading='Can I buy medical supplies from Medline.io?' 
          answer={
            <div>
              Nope. This platform is purely for posting, organising and listing
              medical supply needs in order to more effectively connect them
              with folks that can meet those requirements in the most efficient
              and effective way possible. Its matchmaking for medical supplies.
              There is no buy & sell / transactions happening on the site.
            </div>
          }
          bottomPanel={false}
        />
        <Panel 
          heading='Then how does MedLine.io make money?' 
          answer={
            <div>
            Well, we don't make any money. MedLine.io is a grassroots not-for-profit initiative. The
              platform is built and operated by generous and highly skilled volunteers from all over the
              world.
              <br />
              <br />
              Also, we do not sell ad spaces for advertising revenue, and we absolutely do not sell community
              members' information - which are not provided to any 3rd parties by site operators.
              <br />
              <br />
              We do receive some donations to help keep the platform up and running. If you’d like to learn more 
              about volunteering or donations, click <a href="#">here</a> or <a href="/contact-us">contact us</a>.
            </div>
          }
          bottomPanel={false}
        />
        <Panel 
          heading='How do you prioritise "Needs"?' 
          answer={
            <div>
              Right now, we are prioritizing Needs based on the information shared by users. Members fill in
              Urgency level when posting medical supply requirements. The 5 Urgency Levels are listed as:
              <br/><br/>
              Level 1: Life threatening now. Need immediate supplies.<br/>
              Level 2: Supply needs are required within 1 week.<br/>
              Level 3: Supply needs are required within 2 weeks.<br/>
              Level 4: Forecast needs will be required within 3-4 weeks.<br/>
              Level 5: Good to have supplies just in case, but send to others with more needs first.
              <br/><br/>
              We ask that all posters try to be as accurate as possible in terms of quantities, timeframe and 
              urgency requirements so that people with truly pressing needs for immediate support can be identified
              and helped first.
              <br/><br/>
              Meanwhile, we are looking into more sophisticated methods for developing "urgency prioritization". For
              example, how might we develop accurate modelling of where needs might crop up next, based on spreading
              trends of the virus vs available healthcare centers in the area; along with number of hospital beds,
              ventilators, doctors, nurses, etc.?
              <br/><br/>
              If you have relevant expertise and ideas that could help with this, <a href="/contact-us">please let us know!</a>.
            </div>
          }
          bottomPanel={false}
        />
        <Panel 
          heading='What are "Leads"?' 
          answer={
            <div>
              Leads can be any individual or organization that has medical supplies in stock and available to ship.
              These can include personal volunteers, NGOs, distributors and distribution businesses, as well as 
              manufacturers.
            </div>
          }
          bottomPanel={false}
        />
        <Panel 
          heading='Are the Leads / Suppliers certified?' 
          answer={
            <div>
              Unfortunately, no; since Leads can also be individual volunteers, the platform is not able to certify
              Leads stocks at this time. However, the Leads list has highlighted suppliers that have already
              effectively shipped to another member on the platform. These shipments have been verified by recipients
              and the Leads are marked with a green flag.
              <br/><br/>
              In addition, we're working on enabling Leads to upload photos of their products, stocks, certifications
              and licenses, etc. But these cannot be verified by platform volunteers at this time.
            </div>
          }
          bottomPanel={false}
        />
        <Panel 
          heading="Who's using the platform?" 
          answer={
            <div>
              Our community members consist of:<br />
              <br />
                <li>Medical Personnel</li>
                <li>Healthcare Organisations</li>
                <li>Volunteers / NGOs</li>
                <li>Supply Distributors</li>
                <li>Supply Manufacturers</li>
                <br />
              If you know anyone that may benefit from this site, please share with them.<br />
              <br />
              MedLine.io is 100% free to use and takes just a few minutes to post Needs / Leads!<br />
              <br />
              Here's our [link] and [social accounts].
            </div>
          }
          bottomPanel={false}
        />
        <Panel 
          heading='Are you related to MedlinePlus or Medline Industries?' 
          answer={
            <div>
              Apologies for any confusion. MedLine.io is not related in any way to MedlinePlus or 
              Medline Industries. We don’t know them, and they don't know us (at least not yet).
              <br />
              <br />
              In case you're wondering, according to their websites:
              <br />
              <br />
              MedlinePlus is “an online health information resource” and “service of the National 
              Library of Medicine (NLM), the world’s largest medical library, which is part of the National
              Institutes of Health (NIH).
              You can visit them at <a href="https://www.medlineplus.gov/">https://medlineplus.gov/</a>
              <br />
              <br />
              Medline Industries is “the largest privately held manufacturer and
              distributor of medical supplies.” You can vist them at <a href="https://www.medline.com/">https://www.medline.com/</a>
            </div>
          }
          bottomPanel={true}
        /> 
      </div>
    </div>
  );
}
