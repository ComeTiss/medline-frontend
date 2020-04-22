import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Need from "../../service/models/need.model";
import NeedsTable from "../needs-and-leads/NeedsTable";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

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
  needs: Array<Need | null>;
};

function ManageNeeds(props: Props) {
  const styles = useStyles();
  const { needs } = props;
  return (
    <div className={styles.root}>
      <Typography variant="h6" className={styles.title}>
        My needs
      </Typography>
      <NeedsTable needs={needs} />
      <Container className={styles.submit}>
        <Button variant="contained" color="primary">
          Submit new need
        </Button>
      </Container>
    </div>
  );
}

export default ManageNeeds;
