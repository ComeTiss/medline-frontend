import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

import Need from "../../service/models/need.model";
import NeedsTable from "../needs-and-leads/NeedsTable";
import CreateOrEditNeedModal from "../needs-and-leads/CreateOrEditNeedModal";
import { MUTATE_NEED } from "../../service/apollo/mutations";
import { GET_NEEDS } from "../../service/apollo/queries";

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
  },
  modal: {
    outline: "none"
  }
}));

type Props = {
  needs: Array<Need | null>;
  userId: number;
};

function ManageNeeds(props: Props) {
  const styles = useStyles();
  const { needs, userId } = props;
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [error, setError] = useState("");
  const [mutateNeed] = useMutation(MUTATE_NEED);

  const [filteredNeeds, setFilteredNeeds] = useState(needs);
  function searchNeeds(e: any) {
    setFilteredNeeds(
      needs.filter(it => !!it && it.itemName.search(e.target.value) >= 0)
    );
  }

  const onSubmit = (need: Need) => {
    mutateNeed({
      variables: { request: need },
      refetchQueries: [
        {
          query: GET_NEEDS,
          variables: {
            request: { filters: { authorId: userId } }
          }
        }
      ]
    })
      .then(() => setShowSubmitModal(false))
      .catch(() => setError("Internal server error, please try again later"));
  };

  return (
    <>
      <div className={styles.root}>
        <div className={styles.searchTool}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item xs={8}></Grid>
            <Typography variant="h6" className={styles.title}>
              My needs
            </Typography>
          </Grid>
          <Grid item>
            <SearchIcon />
          </Grid>
          <Grid item>
            <TextField
              id="input-with-icon-grid"
              onChange={searchNeeds}
              label="Search for needs"
            />
          </Grid>
        </div>
        <NeedsTable
          needs={filteredNeeds}
          onSubmit={onSubmit}
          submitError={error}
          userId={userId}
        />
        <Container className={styles.submit}>
          <Button
            onClick={() => console.log("Clicked submit new need")}
            startIcon={<LoyaltyIcon />}
            variant="contained"
            color="primary"
          >
            Submit new need
          </Button>
        </Container>
      </div>
      <CreateOrEditNeedModal
        title="Create Need"
        onSubmit={onSubmit}
        submitError={error}
        onClose={() => setShowSubmitModal(false)}
        isOpen={showSubmitModal}
      />
    </>
  );
}

export default ManageNeeds;
