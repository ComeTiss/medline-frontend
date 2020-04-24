import React from "react";
import NavBar from "../components/navigation/NavBar";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    navBar__container: {
        color: "black"
    },
    navBar__linkBtn: {
        marginRight: 16
    },
    navBar__link: {
        color: "black",
        textDecoration: "none"
    },
    navBar__menuBtn: {
        marginLeft: 16,
        flexGrow: 1
    },
    navBar__menu: {
        padding: 0
    },
    navBar__menuItem: {
        height: "50px"
    }
}));

function Donate() {
    const styles = useStyles();
    return (
        <NavBar />
    )
}

export default Donate;