import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(8),
    boxShadow: theme.shadows[3]
  },
  tabsLayout: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 500
  },
  tabsContainer: {
    paddingTop: theme.spacing(2),
    borderRight: `1px solid ${theme.palette.divider}`
  },
  tabs: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2)
  }
}));

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

function UserProfile() {
  const styles = useStyles();
  const [tabNumber, setTabNumber] = useState(0);

  return (
    <Container
      disableGutters
      maxWidth="md"
      classes={{
        root: styles.container
      }}
    >
      <div className={styles.tabsLayout}>
        <Tabs
          orientation="vertical"
          value={tabNumber}
          onChange={(_, value) => setTabNumber(value)}
          aria-label="Vertical tabs"
          className={styles.tabsContainer}
        >
          <Tab
            className={styles.tabs}
            label="Personal Profile Details"
            {...a11yProps(0)}
          />
          <Tab
            className={styles.tabs}
            label="Your organization"
            {...a11yProps(1)}
          />
          <Tab className={styles.tabs} label="Manage needs" {...a11yProps(2)} />
          <Tab
            className={styles.tabs}
            label="Manage offered supplies"
            {...a11yProps(3)}
          />
        </Tabs>
        {/* TODO: Add personal profile details component */}
        {tabNumber === 0 && "Personal Profile Details"}
        {/* TODO: Add your organisation component */}
        {tabNumber === 1 && "Your organisation"}
        {/* TODO: Add manage needs component */}
        {tabNumber === 2 && "Manage needs"}
        {/* TODO: Add manage offered supplies component */}
        {tabNumber === 3 && "Manage offered supplies"}
      </div>
    </Container>
  );
}

export default UserProfile;
