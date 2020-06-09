import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import LeadsViewTable from "../components/needLeadViewPage/leadsViewTable";
import NavBar from "../components/navigation/NavBar";

import maskImage from "../images/face-masks-on-blue-background-3786155.jpg";

function LeadsView() {
  const useStyles = makeStyles(() => ({
    needContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: `url(${maskImage}) no-repeat center center`,
      backgroundSize: "cover",
      height: "93vh",
      overflow: "hidden"
    }
  }));
  const styles = useStyles();

  return (
    <Box>
      <NavBar />
      <Box className={styles.needContainer}>
        <LeadsViewTable />
      </Box>
    </Box>
  );
}

export default LeadsView;
