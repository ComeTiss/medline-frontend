import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, Box, Button, Container } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles(theme => ({
    box: {
        display: "flex",
        height: "20vh",
        justifyContent: "center",
        padding: "40px 80px",
        backgroundColor: "#243867",
        color: "white",
        fontSize: "10px"
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
        fontSize:"20px",
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

    return (
        <>
            <Box className={styles.box}>
                <Container className={styles.container_first}>
                    <Box className={styles.logo}>MedLine.io</Box>
                    <Box className={styles.icons}>
                        <FacebookIcon className={styles.icon}/>
                        <TwitterIcon className={styles.icon}/>
                        <InstagramIcon className={styles.icon}/>
                    </Box>
                    <Box>© MedLine.io 2020</Box>
                </Container>
                <Container className={styles.container}>
                    <Box className={styles.header}>FIGHT COVID</Box>
                    <Box>Nedds: Medical Supplies</Box>
                    <Box>Leads: Suppliers</Box>
                    <Box>
                        <Link className={styles.link} to="/login">Log In</Link>
                    </Box>
                    <Box>
                        <Link className={styles.link} to="/signup">Sign Up</Link>
                    </Box>
                </Container>
                <Container className={styles.container}>
                    <Box className={styles.header}>MEDLINE.IO</Box>
                    <Box>
                        <Link className={styles.link} to="/about-us">About</Link>
                    </Box>
                    <Box>
                        <Link className={styles.link} to="/faq">FAQ</Link>
                    </Box>
                    <Box>
                        Join Our Cause
                    </Box>
                    <Box>
                        <Link className={styles.link} to="/contact-us">Contact Us</Link>
                    </Box>
                </Container>
                <Container className={styles.container_last}>
                    <Box className={styles.logo}>goFundMe</Box>
                    <Button className={styles.button}>DONATE</Button>
                </Container>
            </Box>
        </>
    );
};

export default Footer;