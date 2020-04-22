import React, { useState } from "react";
import {
  Typography,
  makeStyles,
  TextField,
  Button,
  Container,
  IconButton
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import LoyaltyIcon from "@material-ui/icons/Loyalty";

import { validateNeedForm, mapFormInputToNeedSchema } from "./validateForm";

type Props = {
  submitError: string;
  onClose?: () => void;
  onSubmit: (data: any) => void;
};

const GAP_BETWEEN_INPUTS = 10;

const useStyles = makeStyles(theme => ({
  auth_Layout__mainContainer: {
    position: "relative",
    boxShadow: theme.shadows[3],
    padding: theme.spacing(8),
    paddingTop: theme.spacing(8),
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
  },
  healthIcon: {
    marginBottom: theme.spacing(1),
    width: "50px",
    height: "50px"
  },
  closeIconContainer: {
    position: "absolute",
    right: theme.spacing(4),
    top: theme.spacing(4),
    height: "40px",
    width: "40px"
  },
  closeIcon: {
    position: "absolute",
    top: theme.spacing(0.4),
    left: theme.spacing(0.4)
  },
  title: {
    marginBottom: theme.spacing(6)
  }
}));

function CreateNeed(props: Props) {
  const { submitError, onSubmit, onClose } = props;
  const styles = useStyles();
  const [inputData, setInputData] = useState({
    urgencyLevel: "",
    itemName: "",
    specifications: "",
    quantity: "",
    budget: "",
    expireAt: ""
  });

  const onChangeData = (field: string, e: any) => {
    e.persist();
    const newData = { ...inputData };
    // @ts-ignore
    newData[field] = e.target.value;
    setInputData(newData);
  };

  function isError(field: string) {
    const { urgencyLevel, quantity, budget } = inputData;

    switch (field) {
      case "urgencyLevel":
        return Number(urgencyLevel) < 0 || Number(urgencyLevel) > 5;
      case "quantity":
        return isNaN(Number(quantity));
      case "budget":
        return isNaN(Number(budget));
      // TODO: Find a way to check this error
      // case "expireAt":
      //   return Date.now() >= new Date(expireAt).getTime();
      default:
        return false;
    }
  }

  return (
    <Container component="main" maxWidth="sm">
      <div className={styles.auth_Layout__mainContainer}>
        {onClose && (
          <IconButton
            className={styles.closeIconContainer}
            onClick={() => onClose()}
            color="primary"
          >
            <CloseIcon className={styles.closeIcon} fontSize="large" />
          </IconButton>
        )}
        <LoyaltyIcon className={styles.healthIcon} color="primary" />
        <Typography className={styles.title} variant="h5">
          Create Need
        </Typography>
        <form>
          <TextField
            className={styles.authLayout__textInput}
            variant="outlined"
            error={isError("urgencyLevel")}
            required
            fullWidth
            defaultValue="5"
            type="number"
            id="urgency-level-input"
            label="Urgency level (from 1: vital to 5)"
            placeholder="Urgency level"
            onChange={(e: any) => onChangeData("urgencyLevel", e)}
          />
          <TextField
            className={styles.authLayout__textInput}
            variant="outlined"
            required
            fullWidth
            id="item-name-input"
            label="Item name"
            placeholder="Item name"
            onChange={(e: any) => onChangeData("itemName", e)}
          />
          <TextField
            className={styles.authLayout__textInput}
            variant="outlined"
            required
            fullWidth
            id="specifications-input"
            label="Specifications"
            placeholder="Specifications"
            onChange={(e: any) => onChangeData("specifications", e)}
          />
          <TextField
            className={styles.authLayout__textInput}
            variant="outlined"
            required
            fullWidth
            type="number"
            error={isError("quantity")}
            id="quantity-input"
            label="Quantity (number of units)"
            placeholder="Quantity"
            onChange={(e: any) => onChangeData("quantity", e)}
          />
          <TextField
            className={styles.authLayout__textInput}
            variant="outlined"
            required
            fullWidth
            type="number"
            id="budget-input"
            label="Budget (amount in $)"
            placeholder="Budget"
            error={isError("budget")}
            onChange={(e: any) => onChangeData("budget", e)}
          />
          <TextField
            className={styles.authLayout__textInput}
            variant="outlined"
            required
            fullWidth
            type="date"
            defaultValue="1900-01-01"
            id="expire-at-input"
            label="Expires at (future date)"
            onChange={(e: any) => onChangeData("expireAt", e)}
          />

          {submitError && !!submitError?.trim() && (
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
              disabled={validateNeedForm(inputData)}
              onClick={() => onSubmit(mapFormInputToNeedSchema(inputData))}
            >
              Submit Need
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default CreateNeed;
