import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, Box, Button, Container } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles(theme => ({
  boxMd: {
    display: "flex",
    height: "20vh",
    justifyContent: "center",
    padding: "40px 80px",
    backgroundColor: "#243867",
    color: "white",
    fontSize: "10px",
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
    fontSize: "10px",
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
    color: "white"
  },
  button: {
    fontWeight: 400,
    backgroundColor: "#5a698e",
    color: "white",
    padding: "5px 15px"
  },
  header: {
    fontSize: "13px",
    marginBottom: "10px"
  },
  logo: {
    fontSize: "20px",
    fontWeight: 500,
    marginBottom: "5px"
  },
  icons: {
    marginBottom: "10px"
  },
  icon: {
    marginLeft: "5px"
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
          <Box className={styles.logo}>MedLine.io</Box>
          <Box className={styles.icons}>
            <FacebookIcon className={styles.icon} />
            <TwitterIcon className={styles.icon} />
            <InstagramIcon className={styles.icon} />
          </Box>
          <Box>© MedLine.io 2020</Box>
        </Container>
        <Container className={styles.container}>
          <Box className={styles.header}>FIGHT COVID</Box>
          <Box>Needs: Medical Supplies</Box>
          <Box>Leads: Suppliers</Box>
          {BoxWithLink("Log in", "/login")}
          {BoxWithLink("Sign up", "/signup")}
        </Container>
        <Container className={styles.container}>
          <Box className={styles.header}>MEDLINE.IO</Box>
          {BoxWithLink("About", "/about-us")}
          {BoxWithLink("FAQ", "/faq")}
          <Box>Join Our Cause</Box>
          {BoxWithLink("Contact Us", "/contact-us")}
        </Container>
        <Container className={styles.container_last}>
          <Box className={styles.logo}>goFundMe</Box>
          <Button className={styles.button}>DONATE</Button>
        </Container>
      </Box>

      {/* Small screen */}
      <Box className={styles.boxSm}>
        <Container className={styles.column}>
          <Container className={styles.container_first}>
            <Box className={styles.logo}>MedLine.io</Box>
            <Box className={styles.icons}>
              <FacebookIcon className={styles.icon} />
              <TwitterIcon className={styles.icon} />
              <InstagramIcon className={styles.icon} />
            </Box>
            <Box>© MedLine.io 2020</Box>
          </Container>
          <Container className={styles.container}>
            <Box className={styles.header}>FIGHT COVID</Box>
            <Box>Needs: Medical Supplies</Box>
            <Box>Leads: Suppliers</Box>
            {BoxWithLink("Log in", "/login")}
            {BoxWithLink("Sign up", "/signup")}
          </Container>
        </Container>
        <Container className={styles.column}>
          <Container className={styles.container}>
            <Box className={styles.header}>MEDLINE.IO</Box>
            {BoxWithLink("About", "/about-us")}
            {BoxWithLink("FAQ", "/faq")}
            <Box>Join Our Cause</Box>
            {BoxWithLink("Contact Us", "/contact-us")}
          </Container>
          <Container className={styles.container_last}>
            <Box className={styles.logo}>goFundMe</Box>
            <Button className={styles.button}>DONATE</Button>
          </Container>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
