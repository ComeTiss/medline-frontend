import React from "react";
import { useCookies } from "react-cookie";
import { useQuery } from "@apollo/react-hooks";

import NavBar from "../components/navigation/NavBar";
import UserProfileTabs from "../components/user/UserProfileTabs";
import { GET_USERS } from "../service/apollo/queries";
import { GET_NEEDS } from "../service/apollo/queries";
import { GET_LEADS } from "../service/apollo/queries";
import { USER_ID_COOKIE_NAME } from "../utils/constants";

function Profile() {
  const [cookies] = useCookies();
  const { data: userData } = useQuery(GET_USERS, {
    variables: {
      request: {
        filters: {
          userId: cookies[USER_ID_COOKIE_NAME]
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
          authorId: cookies[USER_ID_COOKIE_NAME]
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
          authorId: cookies[USER_ID_COOKIE_NAME]
        }
      }
    },
    fetchPolicy: "network-only"
  });
  const leads = leadsData?.getAllLeads?.leads;
  return (
    <>
      <NavBar showLogout />
      {!!user && <UserProfileTabs user={user} needs={needs} leads={leads} />}
    </>
  );
}

export default Profile;
