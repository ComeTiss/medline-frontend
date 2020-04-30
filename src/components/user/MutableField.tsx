import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  TextField,
  Link,
  Button,
  Divider
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import Organization from "../../service/models/organization.model";

const useStyles = makeStyles(theme => ({
  grid: {
    marginTop: theme.spacing(2),
    margin: "auto",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "80% 20%",
    gridAutoRows: "30px 40px 10px",
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
  }
}));

type Props = {
  baseValue: string;
  inputData: any;
  title: string;
  fieldName: string;
  onChangeData: (fieldName: string, e: any) => void;
  onSubmit: (organization: Organization) => Promise<any>;
};

function UserProfile(props: Props) {
  const styles = useStyles();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const {
    title,
    onChangeData,
    fieldName,
    inputData,
    onSubmit,
    baseValue
  } = props;

  useEffect(() => {
    if (!isEditing) setError("");
  }, [isEditing]);

  const handleSubmit = () => {
    setIsLoading(true);
    onSubmit(inputData)
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
      {!isEditing && <Typography>{baseValue}</Typography>}
      {isEditing && (
        <>
          <TextField
            required
            size="small"
            value={inputData[fieldName]}
            id={`${fieldName}-input`}
            variant="outlined"
            onChange={(e: any) => onChangeData(fieldName, e)}
          />
          <Button
            disabled={isLoading}
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

export default UserProfile;
