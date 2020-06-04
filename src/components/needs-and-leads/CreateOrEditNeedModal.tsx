import React, { useState, useEffect } from "react";
import moment from "moment";
import {
  Typography,
  makeStyles,
  TextField,
  Button,
  Container,
  IconButton,
  Modal,
  Backdrop,
  Fade
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import LoyaltyIcon from "@material-ui/icons/Loyalty";

import Need from "../../service/models/need.model";
import { validateNeedForm, mapFormInputToNeedSchema } from "./validateForm";

type Props = {
  isOpen: boolean;
  title: string;
  submitError: string;
  onClose: () => void;
  onSubmit: (data: any) => void;
  need?: Need;
};

const GAP_BETWEEN_INPUTS = 10;

const useStyles = makeStyles(theme => ({
  createOrEditNeed__mainContainer: {
    position: "relative",
    boxShadow: theme.shadows[3],
    padding: theme.spacing(8),
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(6),
    marginTop: "40px",
    textAlign: "center",
    backgroundColor: "white",
    height: "86vh",
    overflowY: "scroll"
  },
  container: {
    outline: "none"
  },
  createOrEditNeed__textInput: {
    display: "block",
    marginTop: 20,
    marginBottom: GAP_BETWEEN_INPUTS
  },
  createOrEditNeed__submitBtn: {
    display: "block",
    marginTop: theme.spacing(5)
  },
  createOrEditNeed_errorMsg: {
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

function CreateOrEditNeedModal(props: Props) {
  const { submitError, onSubmit, onClose, title, isOpen, need } = props;
  const styles = useStyles();
  const [inputData, setInputData] = useState({
    urgencyLevel: "",
    itemName: "",
    specifications: "",
    quantity: "",
    budget: "",
    expireAt: ""
  });

  useEffect(() => {
    if (!need) return;
    setInputData({
      urgencyLevel: String(need.urgencyLevel),
      itemName: need.itemName,
      specifications: need.specifications!!,
      quantity: String(need.quantity),
      budget: String(need.budget),
      expireAt: moment(need.expireAt, "x").format("YYYY-MM-DD")
    });
  }, [need]);

  const onChangeData = (field: string, e: any) => {
    e.persist();
    const newData = { ...inputData };
    // @ts-ignore
    newData[field] = e.target.value;
    setInputData(newData);
  };

  function isError(field: string) {
    const { urgencyLevel, quantity, budget, expireAt } = inputData;

    switch (field) {
      case "urgencyLevel":
        return Number(urgencyLevel) < 0 || Number(urgencyLevel) > 5;
      case "quantity":
        return quantity !== "" && isNaN(Number(quantity));
      case "budget":
        return isNaN(Number(budget));
      case "expireAt":
        return Date.now() >= new Date(expireAt).getTime();
      default:
        return false;
    }
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={isOpen}>
        <Container component="main" maxWidth="sm" className={styles.container}>
          <div className={styles.createOrEditNeed__mainContainer}>
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
              {title}
            </Typography>
            <form>
              <TextField
                className={styles.createOrEditNeed__textInput}
                variant="outlined"
                error={isError("urgencyLevel")}
                required
                fullWidth
                defaultValue={need?.urgencyLevel ?? null}
                type="number"
                id="urgency-level-input"
                label="Urgency level (from 1: vital to 5)"
                placeholder="Urgency level"
                onChange={(e: any) => onChangeData("urgencyLevel", e)}
              />
              <TextField
                className={styles.createOrEditNeed__textInput}
                variant="outlined"
                required
                fullWidth
                defaultValue={need?.itemName ?? null}
                id="item-name-input"
                label="Item name"
                placeholder="Item name"
                onChange={(e: any) => onChangeData("itemName", e)}
              />
              <TextField
                className={styles.createOrEditNeed__textInput}
                variant="outlined"
                required
                fullWidth
                defaultValue={need?.specifications ?? null}
                id="specifications-input"
                label="Specifications"
                placeholder="Specifications"
                onChange={(e: any) => onChangeData("specifications", e)}
              />
              <TextField
                className={styles.createOrEditNeed__textInput}
                variant="outlined"
                required
                fullWidth
                type="number"
                defaultValue={need ? Number(need?.quantity) : ""}
                error={isError("quantity")}
                id="quantity-input"
                label="Quantity (number of units)"
                placeholder="Quantity"
                onChange={(e: any) => onChangeData("quantity", e)}
              />
              <TextField
                className={styles.createOrEditNeed__textInput}
                variant="outlined"
                required
                fullWidth
                defaultValue={need ? Number(need?.budget) : ""}
                type="number"
                id="budget-input"
                label="Budget (amount in $)"
                placeholder="Budget"
                error={isError("budget")}
                onChange={(e: any) => onChangeData("budget", e)}
              />
              <TextField
                className={styles.createOrEditNeed__textInput}
                variant="outlined"
                required
                fullWidth
                error={isError("expireAt")}
                defaultValue={
                  need
                    ? moment(need?.expireAt, "x").format("YYYY-MM-DD")
                    : "1900-01-01"
                }
                type="date"
                id="expire-at-input"
                label="Expires at (future date)"
                onChange={(e: any) => onChangeData("expireAt", e)}
              />

              {submitError && !!submitError?.trim() && (
                <Typography
                  variant="subtitle1"
                  className={styles.createOrEditNeed_errorMsg}
                >
                  {submitError}
                </Typography>
              )}
              <div className={styles.createOrEditNeed__submitBtn}>
                <Button
                  variant="contained"
                  color="primary"
                  component="span"
                  fullWidth
                  disabled={validateNeedForm(inputData)}
                  onClick={() => onSubmit(mapFormInputToNeedSchema(inputData))}
                >
                  {title}
                </Button>
              </div>
            </form>
          </div>
        </Container>
      </Fade>
    </Modal>
  );
}

export default CreateOrEditNeedModal;
