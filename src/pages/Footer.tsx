import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, Box, Button, Container } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    box: {
        display: "flex",
        height: "40vh",
        backgroundColor: "#243867"
    }
}));


const Footer = () => {

    const styles = useStyles();

    return (
        <>
            <Box className={styles.box}>
                <Container>
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
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                </Container>
                <Container>
                    <Box></Box>
                    <button></button>
                </Container>
            </Box>
        </>
    );
};

export default Footer;