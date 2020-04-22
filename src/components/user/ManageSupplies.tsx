import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Lead from "../../service/models/lead.model";
import LeadsTable from "../needs-and-leads/LeadsTable";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";

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
  }
}));

type Props = {
  leads: Array<Lead | null>;
};

function ManageSupplies(props: Props) {
  const styles = useStyles();
  const { leads } = props;
  return (
    <div className={styles.root}>
      <Typography variant="h6" className={styles.title}>
        My supplies
      </Typography>
      <LeadsTable leads={leads} />
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
