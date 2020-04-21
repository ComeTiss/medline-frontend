import React from "react";
import NavBar from "../components/navigation/NavBar";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  wrapper: { 
    padding:"2rem 4rem"
  },
  paragraphContainer: {
   padding: "1rem 0"
  },
  boldText: {
    fontWeight: "bold"
  }
}));

function AboutUs() {
  const classes = useStyles();
  return (
    <>
      <NavBar showLogout />
      <div className={classes.wrapper}>
        <Typography variant="h3" component="h1" align="center" color="primary">About Us</Typography>

        <Typography variant="body1" component="p" align="center" color="secondary" className={`${classes.paragraphContainer} ${classes.boldText}`}>
          COVID-19 is a global pandemic, threatening people all across the planet.
      </Typography>
        <Typography variant="body1" component="p" align="center" color="secondary" className={`${classes.paragraphContainer} ${classes.boldText}`}>
          Governments, scientists, businesses, NGOs and even private citizens are mobilized in an all-out effort to support
          the medical doctors, nurses and staff fighting tirelessly at the front-lines to contain the virus and save lives.
      </Typography>

        <Typography variant="body1" component="p" align="center" color="secondary" className={`${classes.paragraphContainer} ${classes.boldText}`}>
          In the heat of the battle, there remains much more to be done.
      </Typography>

        <Typography variant="body1" component="p" align="center" color="secondary" className={classes.paragraphContainer}>
          Through personal donations of funds & protective masks, and volunteering to coordinate shipments of medical
          supplies from manufacturers, distributors, shipping & logistics providers in Asia to medical personnel and hospitals
          in hardest-hit areas…
      </Typography>
        <Typography variant="body1" component="p" align="center" color="secondary" className={classes.paragraphContainer}>
          We’ve found our efforts have been effective and impactful; but can still be much faster and more efficient.
      </Typography>
        <Typography variant="body1" component="p" align="center" color="secondary" className={classes.paragraphContainer}>
          Medical supplies direly needed by staff must be identified sooner, prioritized by urgency with more clarity; so we
          can get them the equipment they rely on in order to conduct their jobs safely - without further risking their lives,
          their families, and patients.
      </Typography>

        <Typography variant="body1" component="p" align="center" color="secondary" className={classes.paragraphContainer}>
          MedLine.io is a grassroots initiative and non-profit platform that aggregates global demand and supply of medical supplies urgently needed by medical professionals in the war against COVID-19.
      </Typography>
        <Typography variant="body1" component="p" align="center" color="secondary" className={classes.paragraphContainer}>
          By optimizing medical supply requirements - organized and prioritized by urgency - and effectively matching them with proven suppliers that can meet these needs effectively.
      </Typography>
        <Typography variant="body1" component="p" align="center" color="secondary" className={classes.paragraphContainer}>
          Equipping our medical fighters with the tools they need to stay safe and win. STAT.
      </Typography>

        <Typography variant="body1" component="p" align="center" color="secondary" className={classes.paragraphContainer}>
          The platform is designed, developed and operated by a team of volunteers generously donating their time, skills, resources and funds to this project. If you’d like to join us in supporting this initiative: see here or contact us directly.
      </Typography>
        <Typography variant="body1" component="p" align="center" color="secondary" className={classes.paragraphContainer}>
          Thank you! Stay safe, and be well.
      </Typography>

      </div>
    </>
  );
}

export default AboutUs;
