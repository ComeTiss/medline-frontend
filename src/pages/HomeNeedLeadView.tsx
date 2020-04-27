import React, { useState } from "react";
import { makeStyles, Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(theme => ({
    table: {
        height: "60vh",
        width: "100%",
        backgroundColor: "pink",
        marginBottom: "30px"
    },
    button: {
        fontWeight: 400
    } 
}));





const HomeNeedLeadView = () => {

    const styles = useStyles();

    return (
        <>
        <Box>
            <Box className={styles.table}>
                Needs
                <Button
                        variant="contained"
                        color="primary"
                        className={styles.button}
                >
                    VIEW ALL
                </Button>
            </Box>
            <Box className={styles.table}>
                Leads
                <Button
                        variant="contained"
                        color="primary"
                        className={styles.button}
                    >
                        VIEW ALL
                </Button>
            </Box>
        </Box>
        </>
    );
};

export default HomeNeedLeadView;
