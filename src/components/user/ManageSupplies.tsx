import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

import Lead from "../../service/models/lead.model";
import LeadsTable from "../needs-and-leads/LeadsTable";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    width: "100%"
  },
  submit: {
    textAlign: "center",
    position: "absolute",
    bottom: theme.spacing(5)
  },
  title: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(1)
  },
  searchTool: {
    marginBottom: theme.spacing(1)
  }
}));

type Props = {
  leads: Array<Lead | null>;
};

function ManageSupplies(props: Props) {
  const styles = useStyles();
  const { leads } = props;
  const [filteredLeads, setFilteredLeads] = useState(leads);
  function searchLeads(e: any) {
    setFilteredLeads(
      leads.filter(it => !!it && it.itemName.search(e.target.value) >= 0)
    );
  }
  return (
    <div className={styles.root}>
      <div className={styles.searchTool}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item xs={8}>
            <Typography variant="h6" className={styles.title}>
              My supplies
            </Typography>
          </Grid>
          <Grid item>
            <SearchIcon />
          </Grid>
          <Grid item>
            <TextField
              id="input-with-icon-grid"
              onChange={searchLeads}
              label="Search for supplies"
            />
          </Grid>
        </Grid>
      </div>
      <LeadsTable leads={filteredLeads} />
      <Container className={styles.submit}>
        <Button
          onClick={() => console.log("Clicked submit new supply")}
          startIcon={<ShareIcon />}
          variant="contained"
          color="primary"
        >
          Submit new supply
        </Button>
      </Container>
    </div>
  );
}

export default ManageSupplies;
