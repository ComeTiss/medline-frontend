import React, { useState } from "react";
import {
  Grid,
  Box,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button
} from "@material-ui/core";
import CountryCodeSelect from "./CountryCodeSelect";
import User from "../../service/models/user.model";

type Props = {
  user: User;
  onSubmit: (data: any) => void;
};

function UpdateProfileDetailsForm(props: Props) {
  const { user, onSubmit } = props;

  const [inputData, setInputData] = useState({
    lastName: user.lastName,
    firstName: user.firstName,
    civility: user.civility,
    functionTitle: user.functionTitle,
    emailDisplay: user.emailDisplay,
    countryCode: "",
    phoneNumber: "",
    whatsAppNumber: "",
    wechat: "",
    skype: ""
  });

  const onChangeData = (field: string, e: any) => {
    e.persist();
    const newData = { ...inputData };
    // @ts-ignore
    newData[field] = e.target.value;
    setInputData(newData);
  };

  return (
    <>
      <Grid container spacing={3} direction="row" justify="flex-start">
        <Grid item xs={3}>
          <Box pt={1}>
            <span>Last (Family) Name</span>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <TextField
            fullWidth
            id="last-name-input"
            value={inputData.lastName}
            onChange={(e: any) => onChangeData("lastName", e)}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} direction="row" justify="flex-start">
        <Grid item xs={3}>
          <Box pt={1}>
            <span>First (Given) Name</span>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <TextField
            fullWidth
            id="first-name-input"
            value={inputData.firstName}
            onChange={(e: any) => onChangeData("firstName", e)}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} direction="row" justify="flex-start">
        <Grid item xs={3}></Grid>
        <Grid item xs={7}>
          <RadioGroup
            row
            aria-label="position"
            name="position"
            defaultValue="end"
          >
            <FormControlLabel
              value="Ms."
              name="civility"
              control={<Radio color="primary" />}
              label="Ms."
              onChange={(e: any) => onChangeData("civility", e)}
            />
            <FormControlLabel
              value="Mr."
              name="civility"
              control={<Radio color="primary" />}
              label="Mr."
              onChange={(e: any) => onChangeData("civility", e)}
            />
            <FormControlLabel
              value="Dr."
              name="civility"
              control={<Radio color="primary" />}
              label="Dr."
              onChange={(e: any) => onChangeData("civility", e)}
            />
          </RadioGroup>
        </Grid>
      </Grid>
      <Grid container spacing={3} direction="row" justify="flex-start">
        <Grid item xs={3}>
          <Box pt={1}>
            <span>Job Title / Function</span>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <TextField
            fullWidth
            id="function-title-input"
            value={inputData.functionTitle}
            onChange={(e: any) => onChangeData("functionTitle", e)}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} direction="row" justify="flex-start">
        <Grid item xs={3}>
          <Box pt={1}>
            <span>
              Display different <br /> Email Address
            </span>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <TextField
            fullWidth
            id="email-display-input"
            value={inputData.emailDisplay}
            onChange={(e: any) => onChangeData("emailDisplay", e)}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} direction="row" justify="flex-start">
        <Grid item xs={3}>
          <Box pt={1}>
            <span>Phone Number</span>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <CountryCodeSelect
            onChangeData={onChangeData}
            inputData={inputData}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            id="phone-number-input"
            onChange={(e: any) => onChangeData("phoneNumber", e)}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} direction="row" justify="flex-start">
        <Grid item xs={3}>
          <Box pt={1}>
            <span>WhatsApp Number</span>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <CountryCodeSelect
            onChangeData={onChangeData}
            inputData={inputData}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            id="whatsapp-number-input"
            onChange={(e: any) => onChangeData("whatsAppNumber", e)}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} direction="row" justify="flex-start">
        <Grid item xs={3}>
          <Box pt={1}>
            <span>WeChat ID</span>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <TextField
            fullWidth
            id="weChat-id-input"
            onChange={(e: any) => onChangeData("wechat", e)}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} direction="row" justify="flex-start">
        <Grid item xs={3}>
          <Box pt={1}>
            <span>Skype ID</span>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <TextField
            fullWidth
            id="skype-id-input"
            onChange={(e: any) => onChangeData("skype", e)}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} direction="row" justify="center">
        <Grid item>
          <Box mt={1}>
            <Button
              variant="contained"
              color="primary"
              component="span"
              onClick={() => onSubmit(inputData)}
            >
              Save
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default UpdateProfileDetailsForm;
