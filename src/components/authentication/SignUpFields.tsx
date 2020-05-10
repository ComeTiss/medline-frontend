import React from "react";
import {
  TextField,
  Typography,
  makeStyles,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@material-ui/core";
import { SignupInputDataType } from "../../utils/signup/signupUtils";
import CountrySelect from "../user/CountrySelect";

type Props = {
  inputData: SignupInputDataType;
  onChangeData: (field: string, e: any) => void;
};

const useStyles = makeStyles(theme => ({
  signupFields__BtnContainer: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  signupFields__TextSeparator: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1.25)
  }
}));

function SignUpFields(props: Props) {
  const { onChangeData, inputData } = props;
  const { password, confirmPassword } = inputData;
  const confirmPasswordHelperText =
    confirmPassword && password !== confirmPassword
      ? "Password must match"
      : "";
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
        helperText={confirmPasswordHelperText}
        error={!!confirmPasswordHelperText}
        onChange={(e: any) => onChangeData("confirmPassword", e)}
      />
      <Typography className={styles.signupFields__TextSeparator} variant="h6">
        Personal Details
      </Typography>
      <RadioGroup row aria-label="position" name="position" defaultValue="">
        <FormControlLabel
          value="Ms."
          control={<Radio color="primary" />}
          label="Ms."
          labelPlacement="start"
          onChange={(e: any) => onChangeData("civility", e)}
        />
        <FormControlLabel
          value="Mr."
          control={<Radio color="primary" />}
          label="Mr."
          labelPlacement="start"
          onChange={(e: any) => onChangeData("civility", e)}
        />
        <FormControlLabel
          value="Dr."
          control={<Radio color="primary" />}
          label="Dr."
          labelPlacement="start"
          onChange={(e: any) => onChangeData("civility", e)}
        />
        <FormControlLabel
          value={""}
          control={<Radio color="primary" />}
          label="Leave blank"
          labelPlacement="start"
          onChange={(e: any) => onChangeData("civility", e)}
        />
      </RadioGroup>
      <TextField
        variant="outlined"
        required
        fullWidth
        id="first-name-input"
        label="First name"
        placeholder="First name"
        className={styles.signupFields__BtnContainer}
        onChange={(e: any) => onChangeData("firstName", e)}
      />
      <TextField
        variant="outlined"
        required
        fullWidth
        id="last-name-input"
        label="Last name"
        placeholder="Last name"
        className={styles.signupFields__BtnContainer}
        onChange={(e: any) => onChangeData("lastName", e)}
      />
      <Typography className={styles.signupFields__TextSeparator} variant="h6">
        Organization Details
      </Typography>
      <TextField
        variant="outlined"
        required
        fullWidth
        id="organization-name-input"
        label="Organization name"
        placeholder="Organization name"
        className={styles.signupFields__BtnContainer}
        onChange={(e: any) => onChangeData("organizationName", e)}
      />
      <TextField
        variant="outlined"
        required
        fullWidth
        id="activity-input"
        label="Activity"
        placeholder="activity title"
        className={styles.signupFields__BtnContainer}
        onChange={(e: any) => onChangeData("activity", e)}
      />
      <TextField
        variant="outlined"
        required
        fullWidth
        id="function-title-input"
        label="Your role"
        placeholder="Your role"
        className={styles.signupFields__BtnContainer}
        onChange={(e: any) => onChangeData("functionTitle", e)}
      />
      <div className={styles.signupFields__BtnContainer}>
        <CountrySelect onChangeData={onChangeData} isOutlined isFullWidth />
      </div>
      <TextField
        variant="outlined"
        required
        fullWidth
        id="city-input"
        label="City"
        placeholder="City"
        className={styles.signupFields__BtnContainer}
        onChange={(e: any) => onChangeData("city", e)}
      />
      <TextField
        variant="outlined"
        required
        fullWidth
        id="address-input"
        label="Address"
        placeholder="Address"
        className={styles.signupFields__BtnContainer}
        onChange={(e: any) => onChangeData("address", e)}
      />
    </>
  );
}

export default SignUpFields;
