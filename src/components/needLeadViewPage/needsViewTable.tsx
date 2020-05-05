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
        table: {
            // border: "1px solid #c3c3c3"
        },
        header: {
            color: "#26396a",
            textAlign: "start"
        },
        td: {
            padding: "4px"
        },
        bodyBox: {
            // border: "1px solid #c3c3c3",
            color: "#77797a"
        },
        footer: {
            display:"flex",
            justifyContent: "center"
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
                <tbody className={styles.bodyBox} >{needs.length > 0 ? needs.map(needRow) : noDataRow()}</tbody>
            </table>
            <Container className={styles.footer}>
                <ArrowLeftIcon onClick={() => changePageHandle("left")} />
                <ArrowRightIcon onClick={() => changePageHandle("right")} />
            </Container>
        </>
    );
}

export default NeedsViewTable;