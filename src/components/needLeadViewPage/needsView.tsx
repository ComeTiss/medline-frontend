import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { makeStyles, Box, Container} from "@material-ui/core";

import { GET_NEEDS } from "../../service/apollo/queries";
import Need from "../../service/models/need.model";
import SearchIcon from '@material-ui/icons/Search';

import maskImage from "../../images/face-masks-on-blue-background-3786155.jpg";





function NeedsView() {
    const [page, setPage] = useState(1);

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
            background: "white",
            width: "80%",
            height: "67vh",
            padding: "35px"
        },
        needHeader: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
        },
        inputBox: {
            display: "flex",
            width: "40%",
            height: "25px",
            justifyContent: "space-between",
            alignItems: "center",
            border: "1px solid grey",
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
        table: {
            border: "1px solid black"
        },
        header: {

        },
        td: {

        },
        body: {
            border: "1px solid grey"
        }
    }));
    const styles = useStyles();

    const { data: needsData } = useQuery(GET_NEEDS, {
        variables: {
            request: {
                options: {
                    page: page,
                    limit: 10
                }
            }
        },
        fetchPolicy: "cache-and-network"
    });

    const needs = needsData?.getAllNeeds?.needs || [];

    const needRow = (need: Need) => (
        <tr key={need.id}>
            <td className={styles.td}>{need.urgencyLevel}</td>
            <td className={styles.td}>{need.itemName}</td>
            <td className={styles.td}>{need.createdAt}</td>
            <td className={styles.td}>{need.createdAt}</td>
            <td className={styles.td}>{need.specifications}</td>
            <td className={styles.td}>{need.quantity}</td>
            <td className={styles.td}>{need.createdAt}</td>
            <td className={styles.td}>{need.budget}</td>
        </tr>
    );

    const noDataRow = () => (
        <tr>
            <td>Nothing to display for now</td>
        </tr>
    );

    return (
        <Box className={styles.needContainer} >
            <Box className={styles.boxNeed}>
                <Box className={styles.needHeader}>
                    <h1>Needs</h1>
                    <Container className={styles.inputBox}>
                        <input className={styles.input} type="text" />
                        <SearchIcon/>
                    </Container>
                </Box>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.header}>URGENCY</th>
                            <th className={styles.header}>ITEMS</th>
                            <th className={styles.header}>POSTED BY</th>
                            <th className={styles.header}>COUNTRY</th>
                            <th className={styles.header}>CITY</th>
                            <th className={styles.header}>QTY</th>
                            <th className={styles.header}>DATE</th>
                            <th className={styles.header}>BUDGET</th>
                        </tr>
                    </thead>
                    <tbody className={styles.body}>{needs.length > 0 ? needs.map(needRow) : noDataRow()}</tbody>
                </table>
            </Box>
        </Box>
    );
}

export default NeedsView;


