import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, Box, Button, Container } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import logoImage from "../../images/homepage_logo.png";

const useStyles = makeStyles(theme => ({
  boxMd: {
    display: "flex",
    height: "25vh",
    justifyContent: "center",
    padding: "40px 80px",
    backgroundColor: "#243867",
    color: "white",
    fontSize: "12px",
    [theme.breakpoints.only("xs")]: {
      display: "none"
    }
  },
  boxSm: {
    display: "none",
    justifyContent: "center",
    padding: "40px 80px",
    backgroundColor: "#243867",
    color: "white",
    fontSize: "9px",
    [theme.breakpoints.only("xs")]: {
      display: "flex"
    }
  },
  column: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    height: "20vh",
    width: "100vw"
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
    [theme.breakpoints.only("xs")]: {
      fontSize: "12px"
    }
  },
  button: {
    fontWeight: 400,
    backgroundColor: "#5a698e",
    color: "white",
    padding: "5px 15px"
  },
  header: {
    fontSize: "19px",
    marginBottom: "10px"
  },
  logo: {
    fontSize: "23px",
    fontWeight: 500,
    marginBottom: "5px",
    marginTop: "13px"
  },
  icons: {
    color: "blue",
    textDecoration: "none",
    marginBottom: "10px"
  },
  icon: {
    color: "blue",
    marginLeft: "5px",
    [theme.breakpoints.only("xs")]: {
      marginLeft: "20px"
    }
  },
  container: {
    padding: "5px"
  },
  container_first: {
    display: "flex",
    flexDirection: "column"
  },
  container_last: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  logoImg: {
    width: "80%",
    marginBottom: "-10px",
    marginTop: "-15px",
    marginLeft: "-15px"
  }
}));

const Footer = () => {
  const styles = useStyles();

  const BoxWithLink = (title: string, path: string) => (
    <Box>
      <Link className={styles.link} to={path}>
        {title}
      </Link>
    </Box>
  );

  return (
    <>
      <Box className={styles.boxMd}>
        <Container className={styles.container_first}>
          <Box className={styles.logo}>
            <img className={styles.logoImg} src={logoImage} alt="logo" />
          </Box>
          <Box className={styles.icons}>
            <a href="http://www.linkedin.com/company/medline-io">
              <LinkedInIcon className={styles.icon} />
            </a>
            <a href="http://www.facebook.com/MedLine.io/">
              <FacebookIcon className={styles.icon} />
            </a>
            <a href='http://www.twitter.com/medlineio'>
              <TwitterIcon className={styles.icon} />
            </a>
            <a href='http://www.instagram.com/medlineio/'>
              <InstagramIcon className={styles.icon} />
            </a>
          </Box>
          <Box>© MedLine.io 2020</Box>
        </Container>
        <Container className={styles.container}>
          <Box className={styles.header}>FIGHT COVID</Box>
          {BoxWithLink("Needs: Medical Supplies", "/needs")}
          {BoxWithLink("Leads: Suppliers", "/leads")}
          {BoxWithLink("Log in", "/login")}
          {BoxWithLink("Sign up", "/signup")}
        </Container>
        <Container className={styles.container}>
          <Box className={styles.header}>MEDLINE.IO</Box>
          {BoxWithLink("About", "/about-us")}
          {BoxWithLink("FAQ", "/faq")}
          {BoxWithLink("Join Our Cause", "/join-us")}
          {BoxWithLink("Contact Us", "/contact-us")}
        </Container>
        <Container className={styles.container_last}>
          <Box className={styles.logo}>GoFundMe</Box>
          <Button className={styles.button}>DONATE</Button>
        </Container>
      </Box>

      {/* Small screen */}
      <Box className={styles.boxSm}>
        <Container className={styles.column}>
          <Container className={styles.container_first}>
            <Box className={styles.logo}>MedLine.io</Box>
            <Box className={styles.icons}>
              <a href="http://www.linkedin.com/company/medline-io">
                <LinkedInIcon className={styles.icon} />
              </a>
              <a href="http://www.facebook.com/MedLine.io/">
                <FacebookIcon className={styles.icon} />
              </a>
              <a href='http://www.twitter.com/medlineio'>
                <TwitterIcon className={styles.icon} />
              </a>
              <a href='http://www.instagram.com/medlineio/'>
                <InstagramIcon className={styles.icon} />
              </a>
            </Box>
            <Box>© MedLine.io 2020</Box>
          </Container>
          <Container className={styles.container}>
            <Box className={styles.header}>FIGHT COVID</Box>
            {BoxWithLink("Needs: Medical Supplies", "/needs")}
            {BoxWithLink("Leads: Suppliers", "/leads")}
            {BoxWithLink("Log in", "/login")}
            {BoxWithLink("Sign up", "/signup")}
          </Container>
        </Container>
        <Container className={styles.column}>
          <Container className={styles.container}>
            <Box className={styles.header}>MEDLINE.IO</Box>
            {BoxWithLink("About", "/about-us")}
            {BoxWithLink("FAQ", "/faq")}
            {BoxWithLink("Join Our Cause", "/join-us")}
            {BoxWithLink("Contact Us", "/contact-us")}
          </Container>
          <Container className={styles.container_last}>
            <Box className={styles.logo}>GoFundMe</Box>
            <Button className={styles.button}>DONATE</Button>
          </Container>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
