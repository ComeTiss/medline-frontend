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
            fontSize: "20px",
            fontFamily: "sans-serif",
            transform: "scaleY(0.95)"
        },
        needs: {
            display: "flex",
            flexDirection: "column",
            height: "110vh",
            justifyContent: "space-between"
        },
        textarea: {
            minHeight: "6vh",
            border: "1px solid #a8a8a8",
            padding: "5px"
        },
        close: {
            float: "right"
        },
        closeIcon: {
            top: "60px",
            position: "absolute",
        },
        span: {
            marginLeft: "5vw"
        },
        title: {
            fontSize: "17px",
            fontWeight: 400,
            transform: "scaleY(0.9)"
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
        if(needs.length > 0  && users.length > 0) {
            return (
                <div>
                    <div className={styles.close} onClick={() => history.goBack()}>
                        <CloseIcon className={styles.closeIcon}/>
                    </div>
                    <div className={styles.header} >NEED DETAIL</div>
                    <div >[ Medical supply needed ]</div>
                    <div className={styles.needs}>
                        <div>Quantity needed : <span className={styles.span}>[{needs[0].quantity}]</span></div>
                        <div>Urgency level: <span className={styles.span}>[{needs[0].urgencyLevel}]</span></div>
                        <div>Supply posted on:  <span className={styles.span}> [{needs[0].createdAt}]</span></div>
                        <div>Product Specifications (including required certifications such as CE, FDA):
                        <div className={styles.textarea}>
                                {needs[0].specifications}
                        </div>
                        </div>
                        {/* <div>
                            <div>Click to open images:</div>
                            <img></img>
                            <img></img>
                            <div>I need help from donors or free supplies.</div>
                        </div> */}
                        <div className={styles.title}>BUDGET</div>
                        <div>My budget per piece is : <span className={styles.span}> {needs[0].budget}</span>{needs[0].budget}USD</div>
                        <div>My budget per piece is :<span className={styles.span}> {needs[0].budget}</span> USD [including / excluding] delivery.</div>
                        <div>I need help from donors or free supplies</div>
                        {renderOrganization()}
                        <div className={styles.title}>CONTACT PERSON</div>
                        <div>[Ms.,Mr.,Dr] [{users[0].firstName}] [{users[0].lastName}]</div>
                        <div>Job title / Function:</div>
                        <div>Email address: {users[0].email}</div>
                        <div>Telephone number: {users[0].phoneNumber}</div>
                        <div>WeChat ID: {users[0].wechat}</div>
                        <div>Skype ID: {users[0].skype}</div>
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
                    <div className={styles.title}>ORGANIZATION DETAILS</div>
                    <div>[Institution / Company Name]</div>
                    <div>Industry / Activity : {needs[0].organization.activity}</div>
                    <div>I need help from donors or free supplies</div>
                    <div>Street address:  {needs[0].organization.address}</div>
                    <div>City: {needs[0].organization.city}</div>
                    <div>Product Specifications (including required certifications such as CE, FDA): </div>
                    <div className={styles.textarea}></div>
                    {/* <div>
                        <div>Click to open images:</div>
                        <img></img>
                        <img></img>
                        <div>I need help from donors or free supplies.</div>
                    </div> */}
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