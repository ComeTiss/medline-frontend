import React, { useState } from "react";
import { makeStyles, Box, Container} from "@material-ui/core";
import NeedsViewTable from './needsViewTable'
import SearchIcon from '@material-ui/icons/Search';

import maskImage from "../../images/face-masks-on-blue-background-3786155.jpg";





function NeedsView() {
    const useStyles = makeStyles(() => ({
        needContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: `url(${maskImage}) no-repeat center center`,
            backgroundSize: "cover",
            height: "100vh"
        },
        boxNeed: {
            display: "flex",
            flexDirection: "column",
            background: "rgba(255,255,255,0.75)",
            width: "80%",
            height: "67vh",
            padding: "20px 35px 35px 35px"
        },
        needHeader: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            color: "#26396a",
        },
        headerText: {
            fontFamily: "inherit",
            fontWeight: 400,
            fontSize: "20px"
        },
        inputBox: {
            display: "flex",
            width: "40%",
            height: "25px",
            justifyContent: "space-between",
            alignItems: "center",
            border: "1px solid #c3c3c3",
            background: "white",
            paddingRight: "2px",
            marginRight: "0px"
        },
        input: {
            width: "100%",
            border: "none",
            height: "23px",
            outline: "none"
        },
        searchIcon: {
            color: "#616161"
        }
    }));
    const styles = useStyles();
        


    return (
        <Box className={styles.needContainer} >
            <Box className={styles.boxNeed}>
                <Box className={styles.needHeader}>
                    <h1 className={styles.headerText}>NEEDS</h1>
                    <Container className={styles.inputBox}>
                        <input className={styles.input} type="text" />
                        <SearchIcon className={styles.searchIcon}/>
                    </Container>
                </Box>
                <NeedsViewTable />
            </Box>
        </Box>
    );
}

export default NeedsView;


