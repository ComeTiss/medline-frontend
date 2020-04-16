import React, { useState } from "react";
import SendIcon from "@material-ui/icons/Send";

import {
  makeStyles,
  Container,
  Typography,
  IconButton,
  Paper,
  InputBase,
  Divider
} from "@material-ui/core";
import NavBar from "../components/navigation/NavBar";
import { sendEmailConfirmation } from "../service/rest/apis";

const useStyles = makeStyles({
  confirmEmail__container: {
    marginTop: 40,
    textAlign: "center"
  },
  confirmEmail__inputContainer: {
    marginTop: 20,
    padding: "2px 4px",
    display: "flex",
    alignItems: "center"
  },
  confirmEmail__inputField: {
    marginLeft: 8,
    flex: 1
  },
  confirmEmail__inputDivider: {
    height: 28,
    margin: 4
  },
  confirmEmail__responseMsgSuccess: {
    marginTop: 10,
    fontWeight: "bolder",
    color: "blue"
  },
  confirmEmail__responseMsgError: {
    marginTop: 10,
    fontWeight: "bolder",
    color: "red"
  }
});

type ReponseMsg = {
  message: string;
  isError: boolean;
};

function ConfirmEmail() {
  const styles = useStyles();
  const [email, setEmail] = useState<string>("");
  const [responseMsg, setResponseMsg] = useState<ReponseMsg>({
    message: "",
    isError: false
  });

  const onSubmit = () => {
    if (!email?.trim()) {
      return;
    }
    sendEmailConfirmation(email)
      .then(response => {
        setResponseMsg({
          message: response?.data?.message,
          isError: false
        });
      })
      .catch(error => {
        setResponseMsg({
          message: error?.response?.data?.error,
          isError: true
        });
      });
  };

  return (
    <>
      <NavBar />
      <Container className={styles.confirmEmail__container} maxWidth="xs">
        <Typography variant="h5">Email Confirmation</Typography>
        <Typography variant="subtitle1">
          An email has been sent to you so we can verify your identity.
        </Typography>
        <Typography variant="subtitle1">
          Enter your email to receive a new confirmation:.
        </Typography>
        <Paper component="form" className={styles.confirmEmail__inputContainer}>
          <InputBase
            placeholder="Email adress"
            className={styles.confirmEmail__inputField}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <Divider
            orientation="vertical"
            className={styles.confirmEmail__inputDivider}
          />
          <IconButton
            color="primary"
            aria-label="directions"
            onClick={onSubmit}
          >
            <SendIcon />
          </IconButton>
        </Paper>
        {responseMsg?.message?.trim() && (
          <Typography
            variant="subtitle1"
            className={
              responseMsg.isError
                ? styles.confirmEmail__responseMsgError
                : styles.confirmEmail__responseMsgSuccess
            }
          >
            {responseMsg.message}
          </Typography>
        )}
      </Container>
    </>
  );
}

export default ConfirmEmail;
