import React from "react";
import { TextField, makeStyles } from "@material-ui/core";

type Props = {
  onChangeData: (field: string, e: any) => void;
};

const GAP_BETWEEN_INPUTS = 10;

const useStyles = makeStyles({
  signupFields__firsNameBtn: {
    marginTop: GAP_BETWEEN_INPUTS,
    marginBottom: GAP_BETWEEN_INPUTS
  }
});

function SignUpFields(props: Props) {
  const { onChangeData } = props;
  const styles = useStyles();
  return (
    <>
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
      <TextField
        variant="outlined"
        required
        fullWidth
        id="first-name-input"
        label="First name"
        placeholder="First name"
        className={styles.signupFields__firsNameBtn}
        onChange={(e: any) => onChangeData("firstName", e)}
      />
      <TextField
        variant="outlined"
        required
        fullWidth
        id="last-name-input"
        label="Last name"
        placeholder="Last name"
        onChange={(e: any) => onChangeData("lastName", e)}
      />
    </>
  );
}

export default SignUpFields;
