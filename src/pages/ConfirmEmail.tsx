import React from "react";
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
  }
});

function ConfirmEmail() {
  const styles = useStyles();
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
          />
          <Divider
            orientation="vertical"
            className={styles.confirmEmail__inputDivider}
          />
          <IconButton color="primary" aria-label="directions">
            <SendIcon />
          </IconButton>
        </Paper>
      </Container>
    </>
  );
}

export default ConfirmEmail;
