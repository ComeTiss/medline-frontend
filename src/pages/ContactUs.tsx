import React, { useState } from "react";
import { makeStyles, Button, Card, Typography } from "@material-ui/core";
import CustomTextField from "../components/form/CustomTextField";
import { useFormFields } from "../utils/hooks";
import NavBar from "../components/navigation/NavBar";
import { signup } from "../service/rest/apis";

const useStyles = makeStyles(theme => ({
  card: { maxWidth: 600, padding: 20, margin: "20px auto" },
  textField: {
    padding: "10px 0"
  },
  buttonWrapper: {
    marginTop: 20,
    textAlign: "center"
  },
  title: {
    color: theme.palette.primary.main,
    padding: "40px 0 20px"
  },
  text: {
    textAlign: "center"
  }
}));

export interface FormValuesProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const intialValues: FormValuesProps = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

const ContactUs = () => {
  const [error, setError] = useState(false);

  const [fields, handleFieldChange, resetValues] = useFormFields(intialValues);
  const classes = useStyles();

  const submit = () => {
    signup(fields)
      .then(() => {
        resetValues();
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <>
      <NavBar />
      <div>
        <Typography variant="h5" className={`${classes.title} ${classes.text}`}>
          Contact us
        </Typography>
        <Typography component="p" className={classes.text}>
          Have any questions, suggestions, or would like to support MedLine.io?
        </Typography>
        <Typography component="p" className={classes.text}>
          Send us an email to support@mediline.io or fill our this form and
          we`ll get back to you.
        </Typography>
        <Card className={classes.card}>
          {error ? (
            <>
              <Typography component="p" className={classes.text}>
                There was an error, please try again later
              </Typography>
              <br />
              <div className={classes.text}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setError(false)}
                >
                  Go back to form
                </Button>
              </div>
            </>
          ) : (
            <form>
              <CustomTextField
                label="Name"
                className={classes.textField}
                onChange={handleFieldChange}
                name="name"
                value={fields.name}
              />
              <CustomTextField
                label="Email (for reply)*"
                className={classes.textField}
                onChange={handleFieldChange}
                name="email"
                value={fields.email}
              />
              <CustomTextField
                label="Subject"
                className={classes.textField}
                onChange={handleFieldChange}
                name="subject"
                value={fields.subject}
              />
              <CustomTextField
                label="Message*"
                className={classes.textField}
                onChange={handleFieldChange}
                name="message"
                value={fields.message}
                multiline
              />
              <div className={classes.buttonWrapper}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={submit}
                  disabled={fields.email === "" || fields.message === ""}
                >
                  Submit
                </Button>
              </div>
            </form>
          )}
        </Card>
      </div>
    </>
  );
};

export default ContactUs;
