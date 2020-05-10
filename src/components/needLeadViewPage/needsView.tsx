import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import NeedsViewTable from "./needsViewTable";

import maskImage from "../../images/face-masks-on-blue-background-3786155.jpg";

function NeedsView() {
  const useStyles = makeStyles(() => ({
    needContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: `url(${maskImage}) no-repeat center center`,
      backgroundSize: "cover",
      height: "100vh"
    }
  }));
  const styles = useStyles();

  return (
    <Box className={styles.needContainer}>
      <NeedsViewTable />
    </Box>
  );
}

export default NeedsView;
