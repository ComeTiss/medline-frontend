import React, { useState } from "react";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

import Lead from "../../service/models/lead.model";
import Need from "../../service/models/need.model";
import User from "../../service/models/user.model";
import ManageNeeds from "./ManageNeeds";
import ManageLeads from "./ManageLeads";
import OrganizationInfo from "./OrganisationInfo";
import PersonalProfileDetails from "./PersonalProfileDetails";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(8),
    boxShadow: theme.shadows[3],
    opacity: "75%"
  },
  tabsLayout: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    minHeight: "740px",
    height: "100%"
  },
  tabsContainer: {
    paddingTop: theme.spacing(2),
    minWidth: "220px",
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

type Props = {
  user: User;
  needs: Array<Need | null>;
  leads: Array<Lead | null>;
};

function UserProfile(props: Props) {
  const styles = useStyles();
  const { user, needs, leads } = props;
  const [tabNumber, setTabNumber] = useState(0);

  if (!user) return null;

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
            label="Personal info"
            {...a11yProps(0)}
          />
          <Tab
            className={styles.tabs}
            label="Organization info"
            {...a11yProps(1)}
          />
          <Tab className={styles.tabs} label="Manage needs" {...a11yProps(2)} />
          <Tab
            className={styles.tabs}
            label="Manage supplies"
            {...a11yProps(3)}
          />
        </Tabs>
        {tabNumber === 0 && <PersonalProfileDetails user={user} />}
        {tabNumber === 1 && <OrganizationInfo user={user} />}
        {tabNumber === 2 && <ManageNeeds needs={needs} userId={user.id} />}
        {tabNumber === 3 && <ManageLeads leads={leads} userId={user.id} />}
      </div>
    </Container>
  );
}

export default UserProfile;
