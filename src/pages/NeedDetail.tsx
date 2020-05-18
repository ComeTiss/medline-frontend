import React,  { useState }from "react";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from 'react-router-dom';
import { makeStyles, Box } from "@material-ui/core";
import { GET_NEEDS, GET_USERS } from "../service/apollo/queries";
// import LeadsViewTable from "../components/needLeadViewPage/leadsViewTable";

import maskImage from "../images/face-masks-on-blue-background-3786155.jpg";

function NeedDetail() {
    const [userId, setUserId] = useState(1);
    const [id, setId] = useState("1");


    const { needId } = useParams();

    const useStyles = makeStyles(() => ({
        needContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: `url(${maskImage}) no-repeat center center`,
            backgroundSize: "cover",
            height: "100vh",
            overflow: "hidden"
        }
    }));
    const styles = useStyles();

    const { data: userData } = useQuery(GET_USERS, {
        variables: {
            request: {
                filters: {
                    userId
                }
            }
        },
        fetchPolicy: "network-only"
    });

    const { data: needsData } = useQuery(GET_NEEDS, {
        variables: {
            request: {
                filters: {
                    id
                }
            }
        },
        fetchPolicy: "cache-and-network"
    });


    const needs = needsData?.getAllNeeds?.needs || [];
    const users = userData?.getUsersWithOptions?.users || [];


    console.log("needs",needs)
    console.log("users", users)
    console.log("needId", needId)

    return (
        <Box className={styles.needContainer}>
        </Box>
    );
}

export default NeedDetail;