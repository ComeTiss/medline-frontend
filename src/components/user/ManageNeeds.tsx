import React, { useState, forwardRef } from "react";
import { useMutation } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";

import Need from "../../service/models/need.model";
import NeedsTable from "../needs-and-leads/NeedsTable";
import CreateNeed from "../needs-and-leads/CreateNeed";
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

  const CreateNeedComponent = forwardRef((props: any, ref: any) => {
    const { submitError, onSubmit, onClose } = props;
    return (
      <div ref={ref}>
        <CreateNeed
          submitError={submitError}
          onSubmit={onSubmit}
          onClose={onClose}
        />
      </div>
    );
  });
  CreateNeedComponent.displayName = "CreateNeed";
  const [filteredNeeds, setFilteredNeeds] = useState(needs);
  function searchNeeds(e: any) {
    setFilteredNeeds(
      needs.filter(it => !!it && it.itemName.search(e.target.value) >= 0)
    );
  }

  return (
    <>
      <div className={styles.root}>
        <div className={styles.searchTool}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item xs={8}>
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
          </Grid>
        </div>
        <NeedsTable needs={filteredNeeds} />
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
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={showSubmitModal}
        onClose={() => setShowSubmitModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={showSubmitModal}>
          <DialogContent className={styles.modal}>
            <CreateNeedComponent
              onSubmit={onSubmit}
              submitError={error}
              onClose={() => setShowSubmitModal(false)}
            />
          </DialogContent>
        </Fade>
      </Modal>
    </>
  );
}

export default ManageNeeds;
