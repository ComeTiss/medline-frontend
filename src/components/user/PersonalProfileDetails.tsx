import React, { useState } from "react";
import {
  makeStyles,
  Container,
  Typography,
  Grid,
  Box,
  Link
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import User from "../../service/models/user.model";
import ChangePasswordModal from "./ChangePasswordModal";
import UpdateProfileDetailsForm from "./UpdateProfileDetailsForm";

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
  }
}));

function PersonalProfileDetails(props: Props) {
  const { user } = props;
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  //const [error, setError] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [inputData, setInputData] = useState({
    password: "",
    confirmPassword: "",
    lastName: user.lastName,
    firstName: user.firstName,
    civility: "",
    functionTitle: user.functionTitle,
    emailDisplay: user.email,
    countryCode: "",
    phoneNumber: "",
    whatsAppNumber: "",
    weChatId: "",
    skypeId: ""
  });

  const onChangeData = (field: string, e: any) => {
    e.persist();
    const newData = { ...inputData };
    // @ts-ignore
    newData[field] = e.target.value;
    setInputData(newData);
  };

  const onSubmit = (data: any) => {
    if (data?.password !== data?.confirmPassword) {
      //setError("Invalid password confirmation.");
      return;
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
            onChangeData={onChangeData}
            open={open}
            handleClose={handleClose}
          />
        </Grid>
        <Typography variant="h6" align="left" paragraph={true}>
          Completing your contact information will help connect with matches
          faster.
        </Typography>
        <p className={styles.personalProfileDetailsLayout__subText}>
          The following information will only be displayed to registered users.
        </p>
        <UpdateProfileDetailsForm
          user={user}
          inputData={inputData}
          onChangeData={onChangeData}
          onSubmit={onSubmit}
        />
      </div>
    </Container>
  );
}

export default PersonalProfileDetails;
