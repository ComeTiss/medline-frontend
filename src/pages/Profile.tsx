import React from "react";
import { useCookies } from "react-cookie";
import { useQuery } from "@apollo/react-hooks";

import NavBar from "../components/navigation/NavBar";
import UserProfileTabs from "../components/user/UserProfileTabs";
import { GET_USERS } from "../service/apollo/queries";
import { USER_ID_COOKIE_NAME } from "../utils/constants";

function Profile() {
  const [cookies] = useCookies();
  const { data } = useQuery(GET_USERS, {
    variables: {
      request: {
        filters: {
          userId: cookies[USER_ID_COOKIE_NAME]
        }
      }
    },
    fetchPolicy: "network-only"
  });
  const user = data?.getUsersWithOptions?.users[0];

  return (
    <>
      <NavBar showLogout />
      <UserProfileTabs user={user} />
    </>
  );
}

export default Profile;
