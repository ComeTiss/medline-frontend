import React from "react";
import { useCookies } from "react-cookie";
import { useQuery } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";

import NavBar from "../components/navigation/NavBar";
import UserProfileTabs from "../components/user/UserProfileTabs";
import { GET_USERS, GET_NEEDS, GET_LEADS } from "../service/apollo/queries";
import { USER_ID_COOKIE_NAME } from "../utils/constants";

const backgroundImg = require("../images/face-masks-on-blue-background-3786155.jpg");

const useStyles = makeStyles({
  container: {
    position: "relative",
    height: "100%"
  },
  background: {
    position: "absolute",
    float: "left",
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    background: `url(${backgroundImg}) no-repeat`,
    opacity: "50%"
  }
});

function Profile() {
  const styles = useStyles();
  const [cookies] = useCookies();
  const userId = cookies[USER_ID_COOKIE_NAME];
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
  const user = userData?.getUsersWithOptions?.users[0];
  const { data: needsData } = useQuery(GET_NEEDS, {
    variables: {
      request: {
        filters: {
          authorId: userId
        }
      }
    },
    fetchPolicy: "network-only"
  });
  const needs = needsData?.getAllNeeds?.needs;
  const { data: leadsData } = useQuery(GET_LEADS, {
    variables: {
      request: {
        filters: {
          authorId: userId
        }
      }
    },
    fetchPolicy: "network-only"
  });
  const leads = leadsData?.getAllLeads?.leads;
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.background} />
      {!!user && <UserProfileTabs user={user} needs={needs} leads={leads} />}
    </div>
  );
}

export default Profile;
