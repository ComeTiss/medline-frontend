import React, { useState } from "react";
import {
  makeStyles,
  Container,
  Typography,
  Grid,
  Box,
  Link,
  Modal,
  Backdrop
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import User from "../../service/models/user.model";
import ChangePasswordModal from "./ChangePasswordModal";
import UpdateProfileDetailsForm from "./UpdateProfileDetailsForm";
import { MUTATE_USER } from "../../service/apollo/mutations";
import { useMutation } from "@apollo/react-hooks";

type Props = {
  user: User;
};

const GAP_BETWEEN_INPUTS = 10;

const useStyles = makeStyles(theme => ({
  personalProfileDetailsLayout__mainContainer: {
    marginTop: 20,
    marginBottom: 20,
    padding: "0 40px"
  },
  personalProfileDetailsLayout__subText: {
    textAlign: "left",
    color: "#cccccc",
    marginBottom: GAP_BETWEEN_INPUTS
  },
  personalProfileDetailsLayout__submitBtn: {
    display: "block",
    marginTop: 40,
    marginBottom: 40
  },
  personalProfileDetailsLayout__modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  personalProfileDetailsLayout__paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  updateSuccessModalLayout__modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  updateSuccessModalLayout__paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 400
  }
}));

type ReponseMsg = {
  message: string;
  isError: boolean;
};

function PersonalProfileDetails(props: Props) {
  const { user } = props;
  const [mutateUser] = useMutation(MUTATE_USER);
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  const [openUpdateSuccessModal, setOpenUpdateSuccessModal] = useState(false);
  const [error, setError] = useState("");
  const [responseMsg, setResponseMsg] = useState<ReponseMsg>({
    message: "",
    isError: false
  });

  const handleOpen = () => {
    setError("");
    setResponseMsg({
      message: "",
      isError: false
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenUpdateSuccessModal = () => {
    setOpenUpdateSuccessModal(true);
  };

  const handleCloseUpdateSuccessModal = () => {
    setOpenUpdateSuccessModal(false);
  };

  const onSubmit = (userData: any) => {
    const {
      phoneNumber,
      whatsAppNumber,
      countryCode,
      confirmNewPassword,
      ...userInput
    } = userData;
    userInput.phone = `${countryCode} ${phoneNumber}`;
    userInput.whatsapp = `${countryCode} ${whatsAppNumber}`;

    if (
      userData.oldPassword !== undefined &&
      userData.oldPassword.length === 0
    ) {
      setError("You must enter your old password");
    } else if (userData.newPassword !== confirmNewPassword) {
      setError("Wrong combinaison of password");
    } else if (
      userData.newPassword !== undefined &&
      userData.confirmNewPassword !== undefined &&
      userData.newPassword.length === 0 &&
      userData.newPassword.length === 0
    ) {
      setError("You must enter a new password");
    } else {
      mutateUser({
        variables: { request: userInput }
      })
        .then(() => {
          handleClose();
          handleOpenUpdateSuccessModal();
          setTimeout(() => {
            handleCloseUpdateSuccessModal();
          }, 2000);
        })
        .catch(error => {
          setResponseMsg({
            message: error.graphQLErrors[0].message,
            isError: true
          });
        });
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <div className={styles.personalProfileDetailsLayout__mainContainer}>
        <CssBaseline />
        <Typography variant="h6" align="left" paragraph={true}>
          Log In Information :
        </Typography>
        <Grid container spacing={3} direction="row" justify="flex-start">
          <Grid item xs={3}>
            <span>Email Address</span>
          </Grid>
          <Grid item xs={6}>
            <span>{user.email}</span>
          </Grid>
        </Grid>
        <Grid container spacing={3} direction="row" justify="flex-start">
          <Grid item>
            <Box mb={1}>
              <Link href="#" onClick={handleOpen}>
                CHANGE PASSWORD
              </Link>
            </Box>
          </Grid>
          <ChangePasswordModal
            user={user}
            open={open}
            handleClose={handleClose}
            submitError={error}
            responseMsg={responseMsg}
            onSubmit={onSubmit}
          />
        </Grid>
        <Typography variant="h6" align="left" paragraph={true}>
          Completing your contact information will help connect with matches
          faster.
        </Typography>
        <p className={styles.personalProfileDetailsLayout__subText}>
          The following information will only be displayed to registered users.
        </p>
        <UpdateProfileDetailsForm user={user} onSubmit={onSubmit} />
      </div>
      <Modal
        className={styles.updateSuccessModalLayout__modal}
        open={openUpdateSuccessModal}
        onClose={handleCloseUpdateSuccessModal}
        aria-labelledby="update-success-modal-title"
        aria-describedby="update-success-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <div className={styles.updateSuccessModalLayout__paper}>
          <h2 id="update-success-modal-title">Update success</h2>
          <p id="update_success-modal-description">
            Your information has been saved.
          </p>
        </div>
      </Modal>
    </Container>
  );
}

export default PersonalProfileDetails;
