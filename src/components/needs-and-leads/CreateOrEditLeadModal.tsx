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
import ShareIcon from "@material-ui/icons/Share";

import Lead from "../../service/models/lead.model";
import { validateLeadForm, mapFormInputToLeadSchema } from "./validateForm";

type Props = {
  isOpen: boolean;
  title: string;
  submitError: string;
  onClose: () => void;
  onSubmit: (data: any) => void;
  lead?: Lead;
};

const GAP_BETWEEN_INPUTS = 10;

const useStyles = makeStyles(theme => ({
  createOrEditLead__mainContainer: {
    position: "relative",
    boxShadow: theme.shadows[3],
    padding: theme.spacing(8),
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(6),
    marginTop: "40px",
    textAlign: "center",
    backgroundColor: "white"
  },
  container: {
    outline: "none"
  },
  createOrEditLead__textInput: {
    display: "block",
    marginTop: 20,
    marginBottom: GAP_BETWEEN_INPUTS
  },
  createOrEditLead__submitBtn: {
    display: "block",
    marginTop: theme.spacing(5)
  },
  createOrEditLead_errorMsg: {
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

function CreateOrEditLeadModal(props: Props) {
  const { submitError, onSubmit, onClose, title, isOpen, lead } = props;
  const styles = useStyles();
  const [inputData, setInputData] = useState({
    itemName: "",
    quantity: "",
    cost: "",
    availableAt: "",
    specifications: ""
  });

  useEffect(() => {
    if (!lead) return;
    setInputData({
      cost: String(lead.cost),
      itemName: lead.itemName,
      specifications: lead.specifications!!,
      quantity: String(lead.quantity),
      availableAt: moment(lead.availableAt, "x").format("YYYY-MM-DD")
    });
  }, [lead]);

  const onChangeData = (field: string, e: any) => {
    e.persist();
    const newData = { ...inputData };
    // @ts-ignore
    newData[field] = e.target.value;
    setInputData(newData);
  };

  function isError(field: string) {
    const { cost, quantity, availableAt } = inputData;

    switch (field) {
      case "cost":
        return Number(cost) < 0;
      case "quantity":
        return quantity !== "" && isNaN(Number(quantity));
      case "availableAt":
        return Date.now() >= new Date(availableAt).getTime();
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
          <div className={styles.createOrEditLead__mainContainer}>
            {onClose && (
              <IconButton
                className={styles.closeIconContainer}
                onClick={() => onClose()}
                color="primary"
              >
                <CloseIcon className={styles.closeIcon} fontSize="large" />
              </IconButton>
            )}
            <ShareIcon className={styles.healthIcon} color="primary" />
            <Typography className={styles.title} variant="h5">
              {title}
            </Typography>
            <form>
              <TextField
                className={styles.createOrEditLead__textInput}
                variant="outlined"
                error={isError("cost")}
                required
                fullWidth
                defaultValue={lead?.cost ?? null}
                type="number"
                id="cost-input"
                label="Cost (in $)"
                placeholder="Cost"
                onChange={(e: any) => onChangeData("cost", e)}
              />
              <TextField
                className={styles.createOrEditLead__textInput}
                variant="outlined"
                required
                fullWidth
                defaultValue={lead?.itemName ?? null}
                id="item-name-input"
                label="Item name"
                placeholder="Item name"
                onChange={(e: any) => onChangeData("itemName", e)}
              />
              <TextField
                className={styles.createOrEditLead__textInput}
                variant="outlined"
                required
                fullWidth
                defaultValue={lead?.specifications ?? null}
                id="specifications-input"
                label="Specifications"
                placeholder="Specifications"
                onChange={(e: any) => onChangeData("specifications", e)}
              />
              <TextField
                className={styles.createOrEditLead__textInput}
                variant="outlined"
                required
                fullWidth
                type="number"
                defaultValue={lead ? Number(lead?.quantity) : ""}
                error={isError("quantity")}
                id="quantity-input"
                label="Quantity (number of units)"
                placeholder="Quantity"
                onChange={(e: any) => onChangeData("quantity", e)}
              />
              <TextField
                className={styles.createOrEditLead__textInput}
                variant="outlined"
                required
                fullWidth
                error={isError("availableAt")}
                defaultValue={
                  lead
                    ? moment(lead?.availableAt, "x").format("YYYY-MM-DD")
                    : "1900-01-01"
                }
                type="date"
                id="available-at-input"
                label="Available at (future date)"
                onChange={(e: any) => onChangeData("availableAt", e)}
              />

              {submitError && !!submitError?.trim() && (
                <Typography
                  variant="subtitle1"
                  className={styles.createOrEditLead_errorMsg}
                >
                  {submitError}
                </Typography>
              )}
              <div className={styles.createOrEditLead__submitBtn}>
                <Button
                  variant="contained"
                  color="primary"
                  component="span"
                  fullWidth
                  disabled={validateLeadForm(inputData)}
                  onClick={() => onSubmit(mapFormInputToLeadSchema(inputData))}
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

export default CreateOrEditLeadModal;
