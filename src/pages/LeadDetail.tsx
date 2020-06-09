import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { makeStyles, Box } from "@material-ui/core";
import { GET_LEADS, GET_USERS } from "../service/apollo/queries";
import CloseIcon from "@material-ui/icons/Close";
import { useHistory, useParams } from "react-router-dom";

import maskImage from "../images/face-masks-on-blue-background-3786155.jpg";

function LeadDetail() {
  let history = useHistory();
  const { leadId } = useParams();
  const [userId, setUserId] = useState();
  const [id] = useState(`${leadId}`);

  const useStyles = makeStyles(() => ({
    leadContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: `url(${maskImage}) no-repeat center center`,
      backgroundSize: "cover",
      height: "140vh",
      overflow: "hidden"
    },
    leadWhiteBack: {
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
    leads: {
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
      top: "9vh",
      position: "absolute"
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

  const { data: leadsData } = useQuery(GET_LEADS, {
    variables: {
      request: {
        filters: {
          id
        }
      }
    },
    fetchPolicy: "cache-and-network"
  });

  const leads = leadsData?.getAllLeads?.leads || [];
  const users = userData?.getUsersWithOptions?.users || [];

  useEffect(() => {
    if (leads.length > 0) setUserId(leads[0].authorId);
  }, [leads]);

  const renderLead = () => {
    if (leads.length > 0 && users.length > 0) {
      return (
        <div>
          <div className={styles.close} onClick={() => history.goBack()}>
            <CloseIcon className={styles.closeIcon} />
          </div>
          <div className={styles.header}>SUPPLY DETAIL</div>
          <div>[ Medical supply AVAILABLE]</div>
          <div className={styles.leads}>
            <div>
              Quantity needed :{" "}
              <span className={styles.span}>[{leads[0].quantity}]</span>
            </div>
            <div>
              Available from:{" "}
              <span className={styles.span}>[{leads[0].availableAt}]</span>
            </div>
            <div>
              Supply posted on:{" "}
              <span className={styles.span}> [{leads[0].createdAt}]</span>
            </div>
            <div>
              Product Specifications (including required certifications such as
              CE, FDA):
              <div className={styles.textarea}>{leads[0].specifications}</div>
            </div>
            {/* <div>
                            <div>Click to open images:</div>
                            <img></img>
                            <img></img>
                            <div>I lead help from donors or free supplies.</div>
                        </div> */}
            <div className={styles.title}>COST</div>
            <div>
              Cosy per unit:{" "}
              <span className={styles.span}> {leads[0].budget}</span>
              {leads[0].cost}USD
            </div>
            <div>I can donate these supplies</div>
            {renderOrganization()}
            <div className={styles.title}>CONTACT PERSON</div>
            <div>
              [Ms.,Mr.,Dr] [{users[0].firstName}] [{users[0].lastName}]
            </div>
            <div>Job title / Function:</div>
            <div>Email address: {users[0].email}</div>
            <div>Telephone number: {users[0].phoneNumber}</div>
            <div>WeChat ID: {users[0].wechat}</div>
            <div>Skype ID: {users[0].skype}</div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  const renderOrganization = () => {
    if (leads[0].organization) {
      return (
        <div>
          <div className={styles.title}>ORGANIZATION DETAILS</div>
          <div>[Institution / Company Name]</div>
          <div>Industry / Activity : {leads[0].organization.activity}</div>
          <div>I lead help from donors or free supplies</div>
          <div>Street address: {leads[0].organization.address}</div>
          <div>City: {leads[0].organization.city}</div>
          <div>
            Product Specifications (including required certifications such as
            CE, FDA):{" "}
          </div>
          <div className={styles.textarea}></div>
          {/* <div>
                        <div>Click to open images:</div>
                        <img></img>
                        <img></img>
                        <div>I lead help from donors or free supplies.</div>
                    </div> */}
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  return (
    <Box className={styles.leadContainer}>
      <Box className={styles.leadWhiteBack}>{renderLead()}</Box>
    </Box>
  );
}

export default LeadDetail;
