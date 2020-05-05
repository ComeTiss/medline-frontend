import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { makeStyles, Box, Container } from "@material-ui/core";
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { GET_NEEDS } from "../../service/apollo/queries";
import Need from "../../service/models/need.model";

type Props = {
    page: number;
};

function NeedsViewTable() {
    const [page, setPage] = useState(1);
    const useStyles = makeStyles(() => ({
        outerTable: {
            width: "100%",
            height: "42vh",
            marginBottom: "20px",
            minWidth: "800px",
            minHeight: "475",
        },
        table: {
            width: "100%"
        },
        headerTable: {
            width: "100%",
            minWidth: "800px"
        },
        innerTable: {
            width: "100%",
            height: "42vh",
            minWidth: "800px",
            minHeight:"285",
            border: "1px solid #c3c3c3",
            marginTop: "5px",
            fontSize: "13px",
            fontFamily: "sans - serif",
            fontWeight: 400
        },
        header: {
            color: "#26396a",
            textAlign: "start"
        },
        td: {
            padding: "4px"
        },
        bodyBox: {
            width: "100%",
            color: "#77797a"
        },
        footer: {
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
            color: "#5a5a5a"
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
            <td></td>
        </tr>
    )

    const changePageHandle = (dir: String) => {
        if (dir === "left" && page > 1) {
            setPage(page - 1)
        } else {
            setPage(page + 1)
        }
    }

    return (
        <>
            <Box  className={styles.outerTable}>
                <table className={styles.table}>
                    <Box className={styles.headerTable}>
                        <table className={styles.table}>
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
                        </table>
                    </Box>
                    <Box className={styles.innerTable}>
                        <table className={styles.bodyBox} >{needs.length > 0 ? needs.map(needRow) : noDataRow()}</table >
                    </Box>
                </table>
            </Box>
            <Container className={styles.footer}>
                <ArrowLeftIcon onClick={() => changePageHandle("left")} />
                    {page}
                <ArrowRightIcon onClick={() => changePageHandle("right")} />
            </Container>
        </>
    );
}

export default NeedsViewTable;