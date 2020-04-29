import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, Box, Button, Container } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles(theme => ({
    box: {
        display: "flex",
        height: "20vh",
        padding: "10px",
        backgroundColor: "#243867"
    }
}));


const Footer = () => {

    const styles = useStyles();

    return (
        <>
            <Box className={styles.box}>
                <Container>
                    <Box>Medline.io</Box>
                    <Box>

                    </Box>
                    <Box></Box>
                </Container>
                <Container>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                </Container>
                <Container>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                </Container>
                <Container>
                    <Box></Box>
                    <Button>DONATE</Button>
                </Container>
            </Box>
        </>
    );
};

export default Footer;