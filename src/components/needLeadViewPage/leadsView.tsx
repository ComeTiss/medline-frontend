import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import LeadsViewTable from "./leadsViewTable";

import maskImage from "../../images/face-masks-on-blue-background-3786155.jpg";

function LeadsView() {
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

  return (
    <Box className={styles.needContainer}>
      <LeadsViewTable />
    </Box>
  );
}

export default LeadsView;
