import React, { useState } from "react";
import {
  Typography,
  makeStyles,
  TextField,
  Button,
  Avatar,
  Container
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import SignUpFields from "./SignUpFields";
import Captcha from "./Captcha";

type Props = {
  title: string;
  isSignup?: boolean;
  submitError: string;
  onSubmit: (data: any) => void;
};

const GAP_BETWEEN_INPUTS = 10;

const useStyles = makeStyles(theme => ({
  auth_Layout__mainContainer: {
    boxShadow: theme.shadows[3],
    padding: theme.spacing(8),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(6),
    marginTop: "40px",
    textAlign: "center",
    backgroundColor: "white"
  },
  authLayout__textInput: {
    display: "block",
    marginTop: 20,
    marginBottom: GAP_BETWEEN_INPUTS
  },
  authLayout__submitBtn: {
    display: "block",
    marginTop: theme.spacing(5)
  },
  authLayout__avatar: {
    margin: "auto",
    marginBottom: theme.spacing(2)
  },
  authLayout__signUpFieldsContainer: {
    marginTop: GAP_BETWEEN_INPUTS
  },
  authLayout_errorMsg: {
    marginTop: 8,
    color: "red",
    fontWeight: "bold",
    whiteSpace: "pre-line"
  }
}));

const signUpExtraFields = {
  confirmPassword: "",
  firstName: "",
  lastName: "",
  country: "",
  city: "",
  functionTitle: "",
  company: ""
};

function AuthenticationLayout(props: Props) {
  const { submitError, onSubmit, title, isSignup } = props;
  const styles = useStyles();
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    ...signUpExtraFields
  });

  const onChangeData = (field: string, e: any) => {
    e.persist();
    const newData = { ...inputData };
    // @ts-ignore
    newData[field] = e.target.value;
    setInputData(newData);
  };

  return (
    <Container component="main" maxWidth="sm">
      <div className={styles.auth_Layout__mainContainer}>
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
            type="password"
            variant="outlined"
            required
            fullWidth
            id="password-input"
            label="Password"
            placeholder="Password"
            onChange={(e: any) => onChangeData("password", e)}
          />
          {isSignup && (
            <div className={styles.authLayout__signUpFieldsContainer}>
              <SignUpFields onChangeData={onChangeData} />
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
          <Captcha />
          <div className={styles.authLayout__submitBtn}>
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
    </Container>
  );
}

export default AuthenticationLayout;
