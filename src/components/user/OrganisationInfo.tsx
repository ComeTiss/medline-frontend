import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import { Typography, TextField, Button } from "@material-ui/core";

import User from "../../service/models/user.model";
import CountrySelect from "./CountrySelect";

const useStyles = makeStyles(theme => ({
  container: {
    margin: "auto",
    marginTop: theme.spacing(5),
    height: "90%",
    display: "grid",
    gridTemplateColumns: "40% 60%",
    gridTemplateRows: "1.2fr 1fr 1fr 1fr 1fr 1fr 2fr 0.5fr 0.5fr 0.5fr 2fr",
    width: "60%",
    color: "rgba(0, 0, 0, 0.87)"
  },
  title: {
    gridColumnStart: "span 2"
  },
  additionalInfo: {
    gridColumnStart: "span 2",
    marginTop: theme.spacing(2)
  },
  field: {
    lineHeight: "30px"
  },
  fullLine: {
    gridColumnStart: "span 2",
    fontSize: "14px"
  },
  authLayout__submitBtn: {
    display: "block",
    marginTop: theme.spacing(2),
    marginLeft: "auto",
    width: "20%",
    gridColumnStart: "span 2"
  },
  greenFlagText: {
    marginTop: theme.spacing(3),
    gridColumnStart: "span 2",
    fontSize: "14px"
  }
}));

type Props = {
  user: User;
};

function UserProfile(props: Props) {
  const styles = useStyles();
  const { user } = props;
  const [inputData, setInputData] = useState({
    company: "",
    industry: "",
    address: "",
    country: "",
    city: ""
  });

  if (!user) return null;

  const onChangeData = (field: string, e: any) => {
    e.persist();
    const newData = { ...inputData };
    // @ts-ignore
    if (field !== "country") newData[field] = e.target.value;
    else {
      const country = e.target.textContent.match(/[A-Z].+?(?= \()/g);
      newData[field] = country ? country[0] : "";
    }
    setInputData(newData);
  };

  return (
    <div className={styles.container}>
      <Typography variant="h6" className={styles.title}>
        Completing your organization information will help build trust
      </Typography>
      <Typography className={styles.field}>
        Institution / Company name
      </Typography>
      <TextField
        required
        id="company"
        onChange={(e: any) => onChangeData("company", e)}
      />
      <Typography className={styles.field}>Industry / Activity</Typography>
      <TextField
        required
        id="industry"
        onChange={(e: any) => onChangeData("industry", e)}
      />
      <Typography className={styles.field}>Street Address</Typography>
      <TextField
        required
        id="address"
        onChange={(e: any) => onChangeData("address", e)}
      />
      <Typography className={styles.field}>Country</Typography>
      <CountrySelect onChangeData={onChangeData} />
      <Typography className={styles.field}>City</Typography>
      <TextField
        required
        id="city"
        onChange={(e: any) => onChangeData("city", e)}
      />
      <TextField
        disabled
        variant="outlined"
        defaultValue=" "
        label="Additional information such as certifications"
        className={styles.additionalInfo}
      />
      <Typography className={styles.fullLine}>
        Upload pictures from your institution and past successful deliveries
        (jpeg, png)
      </Typography>
      <Typography className={styles.fullLine}>
        Upload additional files supporting your organization, such as
        certificates (pdf)
      </Typography>
      <div className={styles.authLayout__submitBtn}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          component="span"
          fullWidth
          // onClick={() => onSubmit(inputData)}
        >
          Save
        </Button>
      </div>

      <Typography className={styles.greenFlagText}>
        To verify your organization and get a Green Flag tag highlight by your
        profile and listing: fill and submit the form regarding a successful
        shipment which has gone through.
      </Typography>
    </div>
  );
}

export default UserProfile;
