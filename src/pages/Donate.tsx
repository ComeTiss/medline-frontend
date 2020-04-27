import React from "react";
import NavBar from "../components/navigation/NavBar";
import { makeStyles, Typography, Grid, Divider, Box } from "@material-ui/core";

import backgroundImage from "../media/person-holding-white-peony-bouquet-closeup-photography-1109561.jpg";

const useStyles = makeStyles(theme => ({
    wrapper: {
        background: `url(${backgroundImage}) no-repeat center center`,
        backgroundSize: "cover"
    },
    container: {
        background: "rgba(255, 255, 255, 0.6)",
        padding: "1rem",
        [theme.breakpoints.up("sm")]: {
            padding: "1rem 7rem"
        }
    },
    gridContainer: {
        background: "rgba(255, 255, 255, 0.6)",
        padding: "0%",
        [theme.breakpoints.up("sm")]: {
            padding: "1rem 0"
        }
    },
    overlapContainer: {
        background: "rgba(255, 255, 255, 0.8)",
        padding: "0 2rem",
        [theme.breakpoints.up("sm")]: {
            padding: "0 7rem"
        }
    },
    paragraphContainer: {
        padding: "1rem 0"
    },
    boldText: {
        fontWeight: "bold"
    },
    bottomContainer: {
        backgroundColor: "white",
        padding: "2rem",
        [theme.breakpoints.up("sm")]: {
            padding: "2rem 7rem"
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
        justifyContent: 'center',
        backgroundColor: 'white',
        opacity: '0.75'
    },
    box: {
        padding: theme.spacing(2),
        textAlign: 'center',
        variant: 'outlined',
        fontSize: "16px",
    },
    circle: {
        border: "0.1em solid #233768",
        borderRadius: "100%",
        height: "1.5em",
        width: "1.5em",
        textAlign: "center",
        marginTop: "0.10em",
        marginBottom: "0.10em",
        fontSize: "1.5em",
        fontWeight: "bold",
        fontFamily: "sans-serif",
        color: "#233768",
        margin: "47%"
    },


}));

function Donate() {
    const styles = useStyles();
    return (
        <>
            <NavBar />
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.titleWrapper}>
                        <Typography
                            variant="h3"
                            component="h1"
                            align="center"
                            color="primary"
                        >
                            Donate
                        </Typography>
                    </div>
                </div>
                <div className={styles.container}>
                    <Typography
                        variant="body1"
                        component="p"
                        align="center"
                        color="secondary"
                    >
                        If you'd like to donate funds to our cause, we would apply your kind donations towards
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        align="center"
                        color="secondary"
                    >
                        keeping the platform up and running in the following ways:
                    </Typography>
                </div>
                <div className={styles.gridContainer}>
                    <Grid container className={styles.root} spacing={4}>
                        <Grid item xs={3}>
                            <div className={styles.circle}>1</div>
                            <Box className={styles.box}>
                                Site hosting and server maintenance
                            </Box>
                        </Grid>
                        <Divider orientation="vertical" flexItem={true} variant="middle" />
                        <Grid item xs={3}>
                            <div className={styles.circle}>2</div>
                            <Box className={styles.box}>
                                Ongoing improvements to site functions for providing increased value to members
                                </Box>
                        </Grid>
                        <Divider orientation="vertical" flexItem={true} variant="middle" />
                        <Grid item xs={3}>
                            <div className={styles.circle}>3</div>
                            <Box className={styles.box}>
                                Platform security to protect the privacy of our community memeber
                            </Box>
                        </Grid>
                    </Grid>
                </div>
                <div className={styles.container}>
                    <Typography
                        variant="body1"
                        component="p"
                        align="center"
                        color="secondary"
                    >
                        Any additional donations beyond deployment towards platform maintenance and
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        align="center"
                        color="secondary"
                    >
                        improvements will be spent on medical supply purchases from verified suppliers for free
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        align="center"
                        color="secondary"
                    >
                        distribution to medical needs of highest urgency at the time.
                    </Typography>
                    <br></br>
                    <Typography
                        variant="body1"
                        component="p"
                        align="center"
                        color="secondary"
                    >
                        Donations are accepted here:
                    </Typography>
                    <br></br>
                    <Typography
                        variant="body1"
                        component="p"
                        align="center"
                        color="secondary"
                    >
                        We are working to either partner or register as a recognized non-profit for tax
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        align="center"
                        color="secondary"
                    >
                        deductibles in the near future. Stay tuned
                    </Typography>

                </div>

            </div>

        </>
    )
}

export default Donate;