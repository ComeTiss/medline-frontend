import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  TextField,
  Link,
  Button,
  Divider,
  Grid
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import CountryCodeSelect from "./CountryCodeSelect";

const useStyles = makeStyles(theme => ({
  grid: {
    marginTop: theme.spacing(2),
    margin: "auto",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "80% 20%",
    gridAutoRows: "30px min-content 16px",
    alignItems: "start"
  },
  link: {
    justifySelf: "end",
    fontWeight: "bold"
  },
  title: {
    fontWeight: "bold"
  },
  button: {
    width: "80%",
    height: "40px",
    justifySelf: "end"
  },
  divider: {
    gridColumnStart: "span 2",
    alignSelf: "end"
  },
  errorMsg: {
    marginTop: 8,
    color: "red",
    fontWeight: "bold",
    whiteSpace: "pre-line"
  },
  noInformationMsg: {
    fontStyle: "italic",
    color: "#999999"
  },
  inputPhone: {
    width: "100%"
  }
}));

type Props = {
  payload: any;
  title: string;
  fieldName: string;
  onSubmit: (payload: any) => Promise<any>;
};

function MutableField(props: Props) {
  const styles = useStyles();
  const { payload, title, fieldName, onSubmit } = props;
  const [newValue, setNewValue] = useState(payload[fieldName] ?? "");
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [countryCode, setCountryCode] = useState("");

  useEffect(() => {
    if (!isEditing) setError("");
  }, [isEditing]);

  const handleSubmit = () => {
    const value = countryCode ? `+${countryCode} ${newValue}` : newValue;
    setIsLoading(true);
    onSubmit({ ...payload, [fieldName]: value })
      .then(() => setIsEditing(false))
      .catch(() => setError("Internal server error, please try again later"))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={styles.grid}>
      <Typography variant="body1" className={styles.title}>
        {title}
      </Typography>
      <Link
        component="button"
        onClick={() => setIsEditing(!isEditing)}
        className={styles.link}
        variant="body1"
      >
        {isEditing ? "Cancel" : "Modify"}
      </Link>
      {!isEditing && (
        <Typography
          className={payload[fieldName] ? "" : styles.noInformationMsg}
        >
          {payload[fieldName] ?? "No information"}
        </Typography>
      )}
      {isEditing && (
        <>
          {fieldName === "phoneNumber" || fieldName === "whatsapp" ? (
            <>
              <Grid container direction="row" justify="flex-start">
                <Grid item xs={4}>
                  <CountryCodeSelect
                    value={countryCode}
                    onChangeData={setCountryCode}
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    required
                    className={styles.inputPhone}
                    size="small"
                    value={newValue}
                    id={`${fieldName}-input`}
                    variant="outlined"
                    onChange={e => setNewValue(e.target.value)}
                  />
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <TextField
                required
                size="small"
                value={newValue}
                id={`${fieldName}-input`}
                variant="outlined"
                onChange={e => setNewValue(e.target.value)}
              />
            </>
          )}
          <Button
            disabled={isLoading || newValue === payload[fieldName]}
            className={styles.button}
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
            component="span"
            fullWidth
            onClick={handleSubmit}
          >
            Save
          </Button>
        </>
      )}
      {error && (
        <Typography variant="subtitle1" className={styles.errorMsg}>
          {error}
        </Typography>
      )}
      <Divider className={styles.divider} />
    </div>
  );
}

export default MutableField;
