import React from "react";

import NavBar from "../components/navigation/NavBar";
import UserProfileTabs from "../components/user/UserProfileTabs";

function User() {
  return (
    <>
      <NavBar showLogout />
      <UserProfileTabs />
    </>
  );
}

export default User;
