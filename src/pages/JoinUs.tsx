import React from "react";
import NavBar from "../components/navigation/NavBar";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import SpecArea from "../components/join-us/SpecArea";
const backgroundImage = require("../media/join_us_images/join_us_background.jpg");
const techIcon = require("../media/join_us_images/tech-icon.svg");
const designIcon = require("../media/join_us_images/design-icon.svg");
const mediaIcon = require("../media/join_us_images/media-icon.svg");
const advisoryIcon = require("../media/join_us_images/advisory-icon.svg");
const projectManagementIcon = require("../media/join_us_images/project-management-icon.svg");
const othersIcon = require("../media/join_us_images/others-icon2.svg");

const useStyles = makeStyles(() =>
  createStyles({
    overallContainer: {
      background: `url(${backgroundImage}) no-repeat center center`,
      backgroundSize: "125% auto",
      backgroundPosition: "0 -250px"
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
      fontFamily: "Verdana",
      width: "80%",
      marginLeft: "10%"
    },
    // root: {
    //   width: "80%",
    //   position: "absolute",
    //   left: "10%"
    // },
    // background: {
    //   position: "absolute",
    //   float: "left",
    //   zIndex: -1
    // },
    outro_text: {
      color: "white",
      fontWeight: "bolder",
      textAlign: "center",
      fontSize: "18px",
      fontFamily: "Verdana",
      width: "80%",
      marginLeft: "10%"
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
      fontSize: "15px",
      fontFamily: "Verdana"
    },
    grid_container: {
      marginLeft: "10%",
      display: "grid",
      gridTemplateColumns: "45% 45%"
    },
    contact_button: {
      color: "white",
      backgroundColor: "#233768",
      borderRadius: "10px",
      height: "50px",
      width: "150px",
      fontSize: "16px",
      fontFamily: "Verdana",
      border: "none",
      marginLeft: "45%"
    }
  })
);

export default function JoinUs() {
  const classes = useStyles();

  return (
    <div className={classes.overallContainer}>
      <NavBar />
      {/* <img
        src={String(backgroundImage)}
        style={{ width: "100%" }}
        className={classes.background}
        alt="latex_gloves"
      /> */}
      <div className={classes.title}>Join Us</div>
        <div className={classes.intro_text}>
          Would you like to join our international team of talented volunteers
          developing, operating and optimising&nbsp;
          <span style={{ color: "#233768" }}>Medline.io</span> in our ongoing
          efforts to support front-line medical personnel fighting against
          COVID-19?
          <br />
          Your help is greatly appreciated through:
        </div>
        <br />
        <div className={classes.grid_container}>
          <SpecArea
            icon={String(techIcon)}
            title="TECH"
            content={
              <div>
                <ul>
                  <li>
                    <strong>Full-stack Developers:</strong> Ongoing builds. Continuous improvements
                    to help users more, better, faster.
                  </li>
                  <br />
                  <li>
                    <strong>Back-End:</strong> Site maintenance and security. Keeping the platform
                    up and running smoothly. Protecting privacy of our members.
                  </li>
                  <br />
                  <li>
                    <strong>Data Scientists/Math Whizzes:</strong> Developing algorithms to
                    optimise forecast and prioritisation of &apos;Needs&apos;
                    urgencies. We have to clearly identify and get them helped
                    first and foremost.
                  </li>
                </ul>
              </div>
            }
          />
          <SpecArea
            icon={String(designIcon)}
            title="DESIGN"
            content={
              <div>
                <ul>
                  <li>
                    <strong>Product Designers:</strong> User insights, concepting ideas through
                    design-thinking. Inspired innovation that works.
                  </li>
                  <br />
                  <li>
                    <strong>UI/UX Designers:</strong> User-friendly, intuitive, easy and quick to
                    navigate. Our members are very busy people.
                  </li>
                  <br />
                  <li>
                    <strong>Visual Designers:</strong> Making things pretty on the platform and
                    across our social channels. Cause if we can, then why not.
                  </li>
                  <br />
                </ul>
              </div>
            }
          />         


          <SpecArea
            icon={String(mediaIcon)}
            title="MEDIA / CONTENT"
            content={
              <div>
                <ul>
                  <li>
                    <strong>Writers, Bloggers, Copywriters:</strong> Effectively communicating
                    thoughts, ideas, and inspirations through the written word.
                    Across teams, platforms and social media.
                  </li>
                  <br />
                  <br />
                  <li>
                    <strong>Community Managers:</strong> Share Medline.io to medics and suppliers
                    that could benefit from this platform. Operating our social
                    accounts to keep in touch.
                  </li>
                  <br />
                  <br />
                  <li>
                    <strong>Translators:</strong> Any and every human language. Viruses know no
                    borders. If we can help share needed info across global
                    communities, then we should get to it.
                  </li>
                  <br />
                  <br />
                  <li>
                    <strong>Marketing/PR/Communications Practitioners:</strong> Get the word out
                    across media, with targeted editorials, verticals and
                    channels. Let relevant folks know that Medline.io is working
                    to help out the best we can, as much as we can.
                  </li>
                  <br />
                  <br />
                  <li>
                    <strong>Customer Service Representatives:</strong> Answering emails and
                    corresponding with platform members that have user experience
                    issues, questions or comments.
                  </li>
                  <br />
                  <br />
                  <li>
                    <strong>Crowdfunding Experts:</strong> Sharing effective fundraising best
                    practices via GoFundMe, Kickstarter, Indiegogo, etc. Our
                    volunteers have donated innumerable hours building and
                    operating this site. Hate to have them pay for it too.
                  </li>
                </ul>
              </div>
            }
          />  
          <div>
          <SpecArea
            icon={String(advisoryIcon)}
            title="ADVISORY"
            content={
              <div>
                <ul>
                  <li>
                    <strong>Healthcare Professionals:</strong> Providing insights and expertise on
                    &apos;Needs&apos; requirements, any important info we should
                    consider, or challenges when procuring supplies. Letting us
                    know what we haven&apos;t thought of yet.
                  </li>
                  <br />
                  <li>
                    <strong>Pandemic Experts:</strong> Sharing insights and timely forecasting of
                    viral spread to help with urgency/prioritisation calculations.
                  </li>
                  <br />
                  <li>
                    <strong>Legal Experts:</strong> Trademarks, intellectual properties, adhering
                    to GDPR etc. Who doesn&apos;t need a lawyer?
                  </li>
                </ul>
              </div>
            }
          />
          
          <SpecArea
            icon={String(projectManagementIcon)}
            title="PROJECT MANAGEMENT"
            content={
              <div>
                <ul>
                  <strong>Project Managers:</strong> Taking update and expansion initiatives from
                  zero to hero. The glue that connects people together and gets
                  things happening.
                </ul>
              </div>
            }
          />
          <SpecArea
            icon={String(othersIcon)}
            title="OTHERS"
            content={
              <div>
                <ul>
                  Have a skill, talent, or expertise you feel might be relevant
                  to operating, building or improving the platform? Reach out 
                  to&nbsp;
                  <a href="mailto:ssupport@medline.io" target="_top">
                    support@medline.io
                  </a>
                  &nbsp;and let us know!
                </ul>
              </div>
            }
          />
        </div>
        </div>
        <br />
        <div className={classes.outro_text}>
          If you are, or know of credible transport, customs, quality control or
          other service providers that can facilitate efficient and effective
          delivery of medical supplies in the best interest of all parties,
          please contact us. We are currently building a database and will make
          it available to the public soon.
        </div>
        <br />
        <button className={classes.contact_button}>
          CONTACT US
        </button>
        <br />
        <br />
        <div className={classes.thanks_text}>
          Thanks to all our volunteers & contributors for making this possible!
        </div>
        <br />
        <div className={classes.people}>
          <strong>Tech:</strong> Come Tisserand, Perry Yang, Lucas Zimmerman, thzimmer, Tia Rose,
          Adriana Black, Marta Ibarra, Jason Wong
          <br />
          <strong>Design:</strong> Diane Russell, Elena Svitkina, Voss Yao
          <br />
          <strong>Photography:</strong> Ashcan Forouzani, Tedward Quinn, Tai&apos;s Captures on
          Unsplash
          <br />
          <strong>Media / Content:</strong>
          <br />
          <strong>Project Management:</strong>
        </div>
        <br />
        <br />
    </div>
  );
}
