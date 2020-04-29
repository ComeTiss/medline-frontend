import React, { useState } from "react";
import { makeStyles, Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import doctorMaskImage from "../images/homepage_doctor_mask.jpg";
import { GET_NEEDS } from "../service/apollo/queries";
import { useQuery } from "@apollo/react-hooks";

const useStyles = makeStyles(theme => ({
    box: {
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: `url(${doctorMaskImage}) no-repeat center center `,
        backgroundSize: "cover",
        height: "100vh",
    },
    box_table: {
        height: "45vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        color: "#293d6c",
        paddingBottom: "25px",
        minWidth: "415px",
        minHeight: "280px"

    },
    table: {
        width: "80%"
    },
    button: {
        fontWeight: 400,
        width: "12%",
        margin: "20px 0px 10px 0px"
    },
    header: {
        textAlign: "start",
        fontWeight: 500,
        padding: "5px 0px"
    },
    tr: {
        color:"#6a6a6a",
        fontWeight: 400,
        marginTop: "20px"
    },
    td: {
        padding: "2px"
    },
    h3: {
        fontSize: "18px"
    },
    link: {
        color: "#293d6c"
    }
}));





const HomeNeedLeadView = () => {
    const { data: needsData } = useQuery(GET_NEEDS, {
        variables: {
            request: {
                options: {
                    limit: 5
                }
            }
        },
        fetchPolicy: "network-only"
    });
    const needs = needsData?.getAllNeeds?.needs;

    const styles = useStyles();

    return (
        <>
        <Box className={styles.box}>
                <span>Needs: {JSON.stringify(needs)}</span>
            <Box className={styles.box_table}>
                <h3 className={styles.h3}>VIEW NEEDS</h3>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.header}>URGENCY</th>
                                <th className={styles.header}>NEED</th>
                                <th className={styles.header}>QTY</th>
                                <th className={styles.header}>DONATE/BUY</th>
                                <th className={styles.header}>CITY</th>
                                <th className={styles.header}>NAME</th>
                                <th className={styles.header}></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={styles.tr}>
                                <td className={styles.td}>1</td>
                                <td className={styles.td}>N95</td>
                                <td className={styles.td}>50</td>
                                <td className={styles.td}>can buy</td>
                                <td className={styles.td}>NY</td>
                                <td className={styles.td}>hospital</td>
                                <td><a className={styles.link} href="">More</a></td>
                            </tr>
                            <tr className={styles.tr}>
                                <td className={styles.td}>1</td>
                                <td className={styles.td}>N95</td>
                                <td className={styles.td}>50</td>
                                <td className={styles.td}>can buy</td>
                                <td className={styles.td}>NY</td>
                                <td className={styles.td}>hospital</td>
                                <td><a className={styles.link} href="">More</a></td>
                            </tr>
                            <tr className={styles.tr}>
                                <td className={styles.td}>1</td>
                                <td className={styles.td}>N95</td>
                                <td className={styles.td}>50</td>
                                <td className={styles.td}>can buy</td>
                                <td className={styles.td}>NY</td>
                                <td className={styles.td}>hospital</td>
                                <td><a className={styles.link} href="">More</a></td>
                            </tr>
                            <tr className={styles.tr}>
                                <td className={styles.td}>1</td>
                                <td className={styles.td}>N95</td>
                                <td className={styles.td}>50</td>
                                <td className={styles.td}>can buy</td>
                                <td className={styles.td}>NY</td>
                                <td className={styles.td}>hospital</td>
                                <td><a className={styles.link} href="">More</a></td>
                            </tr>
                            <tr className={styles.tr}>
                                <td className={styles.td}>1</td>
                                <td className={styles.td}>N95</td>
                                <td className={styles.td}>50</td>
                                <td className={styles.td}>can buy</td>
                                <td className={styles.td}>NY</td>
                                <td className={styles.td}>hospital</td>
                                <td><a className={styles.link} href="">More</a></td>
                            </tr>
                        </tbody>
                </table>
                <Button
                            variant="contained"
                            color="primary"
                            className={styles.button}
                        >
                            VIEW ALL
                </Button>
            </Box>
            <Box className={styles.box_table}>
                    <h3 className={styles.h3}>VIEW LEADS</h3>
                    <table className={styles.table} >
                        <thead>
                            <tr>
                                <th className={styles.header}>AVAILABLE</th>
                                <th className={styles.header}>TYPE</th>
                                <th className={styles.header}>QTY</th>
                                <th className={styles.header}>DONATE/SELL</th>
                                <th className={styles.header}>CITY</th>
                                <th className={styles.header}>NAME</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={styles.tr}>
                                <td>1</td>
                                <td>N95</td>
                                <td>50</td>
                                <td>can buy</td>
                                <td>NY</td>
                                <td>hospital</td>
                                <td><a className={styles.link} href="">More</a></td>
                            </tr>
                            <tr className={styles.tr}>
                                <td>1</td>
                                <td>N95</td>
                                <td>50</td>
                                <td>can buy</td>
                                <td>NY</td>
                                <td>hospital</td>
                                <td><a className={styles.link} href="">More</a></td>
                            </tr>
                            <tr className={styles.tr}>
                                <td>1</td>
                                <td>N95</td>
                                <td>50</td>
                                <td>can buy</td>
                                <td>NY</td>
                                <td>hospital</td>
                                <td><a className={styles.link} href="">More</a></td>
                            </tr>
                            <tr className={styles.tr}>
                                <td>1</td>
                                <td>N95</td>
                                <td>50</td>
                                <td>can buy</td>
                                <td>NY</td>
                                <td>hospital</td>
                                <td><a className={styles.link} href="">More</a></td>
                            </tr>
                            <tr className={styles.tr}>
                                <td>1</td>
                                <td>N95</td>
                                <td>50</td>
                                <td>can buy</td>
                                <td>NY</td>
                                <td>hospital</td>
                                <td><a className={styles.link} href="">More</a></td>
                            </tr>
                        </tbody>
                    </table>
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
