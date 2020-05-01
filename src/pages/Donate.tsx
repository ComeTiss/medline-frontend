import React from "react";
import NavBar from "../components/navigation/NavBar";
import Footer from "../pages/Footer";
import {
    makeStyles,
    Typography,
    Grid,
    Divider,
    Box,
    Button
} from "@material-ui/core";

import backgroundImage from "../media/person-holding-white-peony-bouquet-closeup-photography-1109561.jpg";

const useStyles = makeStyles(theme => ({
    wrapper: {
        background: `url(${backgroundImage}) no-repeat center center`,
        backgroundSize: "cover",
        // minHeight: "100vh", 
    },
    container: {
        background: "rgba(255, 255, 255, 0.6)",
        padding: "1rem 4rem",
        [theme.breakpoints.up("sm")]: {
            padding: "1rem 7rem"
        }
    },
    bottomContainer: {
        background: "rgba(255, 255, 255, 0.6)",
        padding: "1rem 4rem 10rem",
        [theme.breakpoints.up("sm")]: {
            padding: "3rem 1rem 18rem"
        }
    },
    gridContainer: {
        background: "rgba(255, 255, 255, 0.6)",
        [theme.breakpoints.up("sm")]: {
            padding: "1rem 0"
        }
    },

    titleWrapper: {
        paddingTop: "2rem",
        [theme.breakpoints.up("sm")]: {
            paddingTop: "2rem"
        }
    },
    root: {
        flexGrow: 1,
        justifyContent: "center",
        backgroundColor: "white",
        opacity: "0.75",
        [theme.breakpoints.up("xs")]: {
            paddingTop: "1rem"
        }
    },
    box: {
        padding: theme.spacing(2),
        textAlign: "center",
        variant: "outlined",
        fontSize: "16px"
    },
    circle: {
        border: "0.1em solid #233768",
        borderRadius: "100%",
        height: "1.6em",
        width: "1.6em",
        textAlign: "center",
        marginTop: "0.10em",
        marginBottom: "0.10em",
        fontSize: "1.5em",
        fontWeight: "bold",
        fontFamily: "sans-serif",
        color: "#233768",
        margin: "47%"
    },
    paypalButton: {
        margin: theme.spacing(2),
        backgroundColor: "white"
    },
    cashButton: {
        margin: theme.spacing(2),
        backgroundColor: "white"
    },

    buttonContainer: {
        textAlign: "center"
    },

    footerContainer: {
        background: "rgba(255, 255, 255, 0.6)",
        // padding: "0rem",
        // display: "flex",
        // minHeight: "30%",
        // marginBottom: "50vh",
        // marginTop: "-180px",
        // width: "105vw",
        // marginLeft: "50%",
        // transform: "translateX(-50%)",
        // position: "fixed",
        // bottom: "0",
        // left: "0",
        // right: "0",
    }
}));

function Donate() {
    const styles = useStyles();

    const TextBody1 = (content: string) => (
        <Typography variant="body1" component="p" align="center" color="secondary">
            {content}
        </Typography>
    );
    const TextH3 = (content: string) => (
        <Typography variant="h3" component="h1" align="center" color="primary">
            {content}
        </Typography>
    );
    const GridItem = (content: string, number: number) => (
        <Grid item xs={12} md={3}>
            <div className={styles.circle}>{number}</div>
            <Box className={styles.box}>{content}</Box>
        </Grid>
    );

    return (
        <>
            <NavBar />
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.titleWrapper}>{TextH3("Donate")}</div>
                </div>
                <div className={styles.container}>
                    {TextBody1(
                        "If you'd like to donate funds to our cause, we would apply your kind donations towards"
                    )}
                    {TextBody1(
                        "keeping the platform up and running in the following ways:"
                    )}
                    <br></br>
                </div>
                <div className={styles.gridContainer}>
                    <Grid container className={styles.root}>
                        {GridItem("Site hosting and server maintenance", 1)}
                        <Divider orientation="vertical" flexItem={true} variant="middle" />
                        {GridItem(
                            "Ongoing improvements to site functions for providing increased value to members",
                            2
                        )}
                        <Divider orientation="vertical" flexItem={true} variant="middle" />
                        {GridItem(
                            "Platform security to protect the privacy of our community member",
                            3
                        )}
                    </Grid>
                </div>
                <div className={styles.bottomContainer}>
                    <br></br>
                    {TextBody1(
                        "Any additional donations beyond deployment towards platform maintenance and"
                    )}
                    {TextBody1(
                        "improvements will be spent on medical supply purchases from verified suppliers for free"
                    )}
                    {TextBody1(
                        "Any additional donations beyond deployment towards platform maintenance and"
                    )}
                    {TextBody1(
                        "distribution to medical needs of highest urgency at the time."
                    )}
                    <br></br>
                    {TextBody1("Donations are accepted here:")}
                    <br></br>
                    <div className={styles.buttonContainer}>
                        <Button
                            variant="contained"
                            href="#"
                            className={styles.paypalButton}
                        >
                            <img
                                src="https://img.icons8.com/color/48/000000/paypal.png"
                                alt="PayPal"
                            />
                        </Button>
                        <Button variant="contained" href="#" className={styles.cashButton}>
                            <img
                                src="https://img.icons8.com/color/48/000000/cash-app.png"
                                alt="Cash"
                            />
                        </Button>
                    </div>
                    <br></br>
                    {TextBody1(
                        "We are working to either partner or register as a recognized non-profit for tax"
                    )}
                    {TextBody1("deductibles in the near future. Stay tuned")}

                </div>
            </div>

            <div className={styles.footerContainer}>
                <Footer />
            </div>


        </>

    );
}

export default Donate;
