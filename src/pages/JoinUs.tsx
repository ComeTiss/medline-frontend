import React from "react";
import NavBar from "../components/navigation/NavBar";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import SpecArea from "../components/join-us/SpecArea";
const backgroundImage = require("../media/join_us_images/join_us_background.jpg");
const techIcon = require("../media/join_us_images/tech-icon.svg");

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
    },
    thanks_text: {
      color: "white",
      fontWeight: "bolder",
      textAlign: "center",
      fontSize: "18px",
      fontFamily: "Verdana"
    },
    people: {
      color: "white",
      textAlign: "center",
      fontSize: "12px",
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
        src={String(backgroundImage)}
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
        <SpecArea
          icon="#"
          title="TECH"
          content={
            <div>
              <ul>
                <li>
                  Full-stack Developers: Ongoing builds. Continuous improvements
                  to help users more, better, faster.
                </li>
                <li>
                  Back-End: Site maintenance and security. Keeping the platform
                  up and running smoothly. Protecting privacy of our members.
                </li>
                <li>
                  Data Scientists/Math Whizzes: Developing algorithms to
                  optimise forecast and prioritisation of &apos;Needs&apos;
                  urgencies. We have to clearly identify and get them helped
                  first and foremost.
                </li>
              </ul>
            </div>
          }
        />
        <SpecArea
          icon="#"
          title="DESIGN"
          content={
            <div>
              <ul>
                <li>
                  Product Designers: User insights, concepting ideas through
                  design-thinking. Inspired innovation that works.
                </li>
                <li>
                  UI/UX Designers: User-friendly, intuitive, easy and quick to
                  navigate. Our members are very busy people.
                </li>
                <li>
                  Visual Designers: Making things pretty on the platform and
                  across our social channels. Cause if we can, then why not.
                </li>
              </ul>
            </div>
          }
        />
        <SpecArea
          icon="#"
          title="MEDIA / CONTENT"
          content={
            <div>
              <ul>
                <li>
                  Writers, Bloggers, Copywriters: Effectively communicating
                  thoughts, ideas, and inspirations through the written word.
                  Across teams, platforms and social media.
                </li>
                <li>
                  Community Managers: Share Medline.io to medics and suppliers
                  that could benefit from this platform. Operating our social
                  accounts to keep in touch.
                </li>
                <li>
                  Translators: Any and every human language. Viruses know no
                  borders. If we can help share needed info across global
                  communities, then we should get to it.
                </li>
                <li>
                  Marketing/PR/Communications Practitioners: Get the word out
                  across media, with targeted editorials, verticals and
                  channels. Let relevant folks know that Medline.io is working
                  to help out the best we can, as much as we can.
                </li>
                <li>
                  Customer Service Representatives: Answering emails and
                  corresponding with platform members that have user experience
                  issues, questions or comments.
                </li>
                <li>
                  Crowdfunding Experts: Sharing effective fundraising best
                  practices via GoFundMe, Kickstarter, Indiegogo, etc. Our
                  volunteers have donated innumerable hours building and
                  operating this site. Hate to have them pay for it too.
                </li>
              </ul>
            </div>
          }
        />
        <SpecArea
          icon="#"
          title="ADVISORY"
          content={
            <div>
              <ul>
                <li>
                  Healthcare Professionals: Providing insights and expertise
                  on 'Needs' requirements, any important info we should
                  consider, or challenges when procuring supplies. Letting
                  us know what we haven't thought of yet.
                </li>
                <li>
                  Pandemic Experts: Sharing insights and timely forecasting
                  of viral spread to help with urgency/prioritisation
                  calculations.
                </li>
                <li>
                  Legal Experts: Trademarks, intellectual properties, adhering
                  to GDPR, etc. Who doesn't need a lawyer?
                </li>
              </ul>
            </div>
          }
        />
        <SpecArea
          icon="#"
          title="PROJECT MANAGEMENT"
          content={
            <div>
              <ul>
                <li>
                  Project Managers: Taking update and expansion initiatives from
                  zero to hero. The glue that connects people together and gets
                  things happening.
                </li>
              </ul>
            </div>
          }
        />
        <SpecArea
          icon="#"
          title="OTHERS"
          content={
            <div>
              <ul>
                <li>
                  Have a skill, talent, or expertise you feel might be relevant
                  to operating, building or improving the platform? Reach out
                  to <a href="mailto:ssupport@medline.io" target="_top">support@medline.io</a> and let us know!
                </li>
              </ul>
            </div>
          }
        />                
        <div className={classes.outro_text}>
          If you are, or know of credible transport, customs, quality control or
          other service providers that can facilitate efficient and effective
          delivery of medical supplies in the best interest of all parties,
          please contact us. We are currently building a database and will make
          it available to the public soon.
        </div>
        <div className={classes.thanks_text}>
          Thanks to all our volunteers & contributors for making this possible!
        </div>
        <div className={classes.people}>
          Tech: Come Tisserand, Perry Yang, Lucas Zimmerman, thzimmer, Tia Rose,
          Adriana Black, Marta Ibarra, Jason Wong
          <br />
          Design: Diane Russell, Elena Svitkina, Voss Yao
          <br />
          Photography: Ashcan Forouzani, Tedward Quinn, Tai&apos;s Captures on
          Unsplash
          <br />
          Media / Content:
          <br />
          Project Management:
        </div>
      </div>
    </>
  );
}
