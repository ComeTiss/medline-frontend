import React, { useState } from "react";
import {
  Modal,
  Backdrop,
  Fade,
  TextField,
  Button,
  makeStyles,
  Typography
} from "@material-ui/core";
import User from "../../service/models/user.model";

type Props = {
  open: boolean;
  handleClose: () => void;
  onSubmit: (data: any) => void;
  submitError: string;
  responseMsg: {
    message: string;
    isError: boolean;
  };
  user: User;
};

const GAP_BETWEEN_INPUTS = 10;

const useStyles = makeStyles(theme => ({
  changePasswordModalLayout__textInput: {
    display: "block",
    marginTop: 20,
    marginBottom: GAP_BETWEEN_INPUTS
  },
  changePasswordModalLayout__submitBtn: {
    display: "block",
    marginTop: 40,
    marginBottom: 40
  },
  changePasswordModalLayout__modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  changePasswordModalLayout__paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 400
  },
  changePasswordModalLayout__responseMsgSuccess: {
    marginTop: 10,
    fontWeight: "bolder",
    color: "blue",
    textAlign: "center"
  },
  changePasswordModalLayout__responseMsgError: {
    marginTop: 10,
    fontWeight: "bolder",
    color: "red",
    textAlign: "center"
  }
}));

function ChangePasswordModal(props: Props) {
  const styles = useStyles();
  const { open, handleClose, onSubmit, submitError, responseMsg, user } = props;

  const [inputData, setInputData] = useState({
    lastName: user.lastName,
    firstName: user.firstName,
    civility: user.civility,
    functionTitle: user.functionTitle,
    emailDisplay: user.emailDisplay,
    countryCode: "",
    phoneNumber: "",
    whatsAppNumber: "",
    wechat: "",
    skype: "",
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: ""
  });

  const onChangeData = (field: string, e: any) => {
    e.persist();
    const newData = { ...inputData };
    // @ts-ignore
    newData[field] = e.target.value;
    setInputData(newData);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={styles.changePasswordModalLayout__modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open}>
        <div className={styles.changePasswordModalLayout__paper}>
          <h2 id="transition-modal-title">Change Password</h2>
          <form>
            <div className={styles.changePasswordModalLayout__textInput}>
              <TextField
                type="password"
                variant="outlined"
                required
                fullWidth
                id="old-password-input"
                label="Old Password"
                placeholder="Old Password"
                onChange={(e: any) => onChangeData("oldPassword", e)}
              />
            </div>
            <div className={styles.changePasswordModalLayout__textInput}>
              <TextField
                type="password"
                variant="outlined"
                required
                fullWidth
                id="new-password-input"
                label="New Password"
                placeholder="New Password"
                onChange={(e: any) => onChangeData("newPassword", e)}
              />
            </div>
            <div className={styles.changePasswordModalLayout__textInput}>
              <TextField
                type="password"
                variant="outlined"
                required
                fullWidth
                id="new-password-confirm-input"
                label="Confirm password"
                placeholder="Confirmation"
                onChange={(e: any) => onChangeData("confirmNewPassword", e)}
              />
            </div>
            {submitError && !!submitError?.trim() && (
              <Typography
                variant="subtitle1"
                className={styles.changePasswordModalLayout__responseMsgError}
              >
                {submitError}
              </Typography>
            )}
            {responseMsg?.message?.trim() && (
              <Typography
                variant="subtitle1"
                className={
                  responseMsg.isError
                    ? styles.changePasswordModalLayout__responseMsgError
                    : styles.changePasswordModalLayout__responseMsgSuccess
                }
              >
                {responseMsg.message}
              </Typography>
            )}
            <div className={styles.changePasswordModalLayout__submitBtn}>
              <Button
                variant="contained"
                color="primary"
                component="span"
                fullWidth
                onClick={() => onSubmit(inputData)}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Fade>
    </Modal>
  );
}

export default ChangePasswordModal;
