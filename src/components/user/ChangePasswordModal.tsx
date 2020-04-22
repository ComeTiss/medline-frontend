import React from "react";
import {
  Modal,
  Backdrop,
  Fade,
  TextField,
  Button,
  makeStyles
} from "@material-ui/core";

type Props = {
  onChangeData: (field: string, e: any) => void;
  open: boolean;
  handleClose: () => void;
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
    padding: theme.spacing(2, 4, 3)
  }
}));

function ChangePasswordModal(props: Props) {
  const styles = useStyles();
  const { onChangeData } = props;
  const { open } = props;
  const { handleClose } = props;

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
            <div className={styles.changePasswordModalLayout__submitBtn}>
              <TextField
                type="password"
                variant="outlined"
                required
                fullWidth
                id="password-input"
                label="Password"
                placeholder="Password"
                onChange={(e: any) => onChangeData("password", e)}
              />
            </div>
            <div className={styles.changePasswordModalLayout__textInput}>
              <TextField
                type="password"
                variant="outlined"
                required
                fullWidth
                id="password-confirm-input"
                label="Confirm password"
                placeholder="Confirmation"
                onChange={(e: any) => onChangeData("confirmPassword", e)}
              />
            </div>
            <div className={styles.changePasswordModalLayout__submitBtn}>
              <Button
                variant="contained"
                color="primary"
                component="span"
                fullWidth
                onClick={() => handleClose}
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
