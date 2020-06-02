import React,  { useState }from "react";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from 'react-router-dom';
import { makeStyles, Box } from "@material-ui/core";
import { GET_NEEDS, GET_USERS } from "../service/apollo/queries";
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from "react-router-dom";
// import LeadsViewTable from "../components/needLeadViewPage/leadsViewTable";

import maskImage from "../images/face-masks-on-blue-background-3786155.jpg";
import { style } from "@material-ui/system";

function NeedDetail() {
    let history = useHistory();
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
            height: "140vh",
            overflow: "hidden"
        },
        needWhiteBack: {
            background: "rgba(255,255,255,0.85)",
            width: "47vw",
            height: "125vh",
            padding: "35px 30px",
            color: "#5a5a5a"
        },
        header: {
            color: "#26396a",
            fontSize: "20px"
        },
        needs: {
            display: "flex",
            flexDirection: "column",
            height: "110vh",
            justifyContent: "space-between"
        },
        textarea: {
            minHeight: "6vh",
            border: "1px solid #a8a8a8"
        },
        close: {
            float: "right"
        },
        closeIcon: {
            top: "60px",
            position: "absolute",
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

    const renderNeed = () => {
        if(needs.length > 0 ) {
            return (
                <div>
                    <div className={styles.close} onClick={() => history.goBack()}>
                        <CloseIcon className={styles.closeIcon}/>
                    </div>
                    <div className={styles.header} >NEED DETAIL</div>
                    <div >[ Medical supply needed ]</div>
                    <div className={styles.needs}>
                        <div>Quantity needed : [{needs[0].quantity}]</div>
                        <div>Urgency level: [{needs[0].urgencyLevel}]</div>
                        <div>Supply posted on: [{needs[0].createdAt}]</div>
                        <div>Product Specifications (including required certifications such as CE, FDA):
                        <div className={styles.textarea}>
                                {needs[0].specifications}
                        </div>
                        </div>
                        <div>
                            <div>Click to open images:</div>
                            <img></img>
                            <img></img>
                            <div>I need help from donors or free supplies.</div>
                        </div>
                        <div>BUDGET</div>
                        <div>My budget per piece is : {needs[0].budget}USD</div>
                        <div>My budget per piece is : {needs[0].budget}USD [including / excluding] delivery.</div>
                        <div>I need help from donors or free supplies</div>
                        {renderOrganization()}
                        <div>CONTACT PERSON</div>
                        <div>[Ms.,Mr.,Dr] [Last family] [First (given) name]</div>
                        <div>Job title / Function:</div>
                        <div>Email address:</div>
                        <div>Telephone number:</div>
                        <div>WeChat ID:</div>
                        <div>Skype ID:</div>
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }


    const renderOrganization = () => {
        if (needs[0].organization) {
            return (
                <div>
                    <div>ORGANIZATION DETAILS</div>
                    <div>[Institution / Company Name]</div>
                    <div>Industry / Activity :</div>
                    <div>I need help from donors or free supplies</div>
                    <div>Street address:</div>
                    <div>City:</div>
                    <div>Product Specifications (including required certifications such as CE, FDA): </div>
                    <div className={styles.textarea}></div>
                    <div>
                        <div>Click to open images:</div>
                        <img></img>
                        <img></img>
                        <div>I need help from donors or free supplies.</div>
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    console.log("needs",needs)
    console.log("users", users)
    console.log("needId", needId)

    return (
        <Box className={styles.needContainer}>
            <Box className={styles.needWhiteBack}>
                {renderNeed()}
            </Box>
        </Box>
    );
}

export default NeedDetail;