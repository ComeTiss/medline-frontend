import React, { useState } from "react";
import {
  Typography,
  makeStyles,
  TextField,
  Button,
  Avatar,
  Container
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

type Props = {
  title: string;
  confirmPassword?: boolean;
  submitError: string;
};

const useStyles = makeStyles(() => ({
  auth_Layout__mainContainer: {
    marginTop: "40px",
    textAlign: "center"
  },
  authLayout__textInput: {
    display: "block",
    marginTop: 40,
    marginBottom: 20
  },
  authLayout__submitBtn: {
    display: "block",
    marginTop: 40
  },
  authLayout__avatar: {
    margin: "auto",
    marginBottom: 8
  },
  authLayout__confirmPwd: {
    marginTop: 20
  },
  authLayout_errorMsg: {
    marginTop: 8,
    color: "red",
    fontWeight: "bold",
    whiteSpace: "pre-line"
  }
}));

function AuthenticationLayout(props: Props) {
  const { submitError, title, confirmPassword } = props;
  const styles = useStyles();
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    passwordConfirm: ""
  });

  const onChangeData = (field: string, e: any) => {
    const newData = { ...inputData };
    // @ts-ignore
    newData[field] = e.target.value;
    setInputData(newData);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={styles.auth_Layout__mainContainer}>
        <CssBaseline />
        <Avatar className={styles.authLayout__avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{title}</Typography>
        <form>
          <div className={styles.authLayout__textInput}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email-input"
              label="Email adress"
              placeholder="Email adress"
              onChange={(e: any) => onChangeData("email", e)}
            />
          </div>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="password-input"
            label="Password"
            placeholder="Password"
            onChange={(e: any) => onChangeData("password", e)}
          />
          {confirmPassword && (
            <div className={styles.authLayout__confirmPwd}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password-confirm-input"
                label="Confirm password"
                placeholder="Confirmation"
                onChange={(e: any) => onChangeData("passwordConfirm", e)}
              />
            </div>
          )}
          {submitError && !!submitError.trim() && (
            <Typography
              variant="subtitle1"
              className={styles.authLayout_errorMsg}
            >
              {submitError}
            </Typography>
          )}
          <div className={styles.authLayout__submitBtn}>
            <Button
              variant="contained"
              color="primary"
              component="span"
              fullWidth
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default AuthenticationLayout;
