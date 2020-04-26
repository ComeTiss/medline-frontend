import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import NavBar from "../components/navigation/NavBar";
import Lead from "../service/models/lead.model";
import Need from "../service/models/need.model";
import CreateOrEditNeedModal from "../components/needs-and-leads/CreateOrEditNeedModal";
import CreateOrEditLeadModal from "../components/needs-and-leads/CreateOrEditLeadModal";
import { MUTATE_NEED } from "../service/apollo/mutations";

import heartImage from "../images/homepage_heart.jpg";
import maskImage from "../images/homepage_mask.jpg";
import threePeopleImage from "../images/homepage_three_people.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  head: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: `url(${heartImage}) no-repeat center center`,
    backgroundSize: "cover",
    height: "50vh",
    width: "100%",
    minHeight: "260px"
  },
  container: {
    display: "flex",
    paddingTop: "25px",
    flexWrap: "wrap"
  },
  submitNeed: {
   width: "45vw",
   height: "22vh",
   display: "flex",
   flexDirection: "column",
   justifyContent: "center",
   textAlign: "center",
   minWidth: "210px",
   minHeight: "185px",
   marginTop: "10px",
   background: `linear-gradient(rgba(255, 255, 255, .7), rgba(255, 255, 255, .7)), url(${threePeopleImage}) no-repeat center center `,
   backgroundSize: "cover",
    color: "#5b5b5b",
   fontSize: "17px"
  },
  submitLead: {
    width: "45vw",
    height: "22vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    minWidth: "210px",
    minHeight: "185px",
    marginTop: "10px",
    background: `linear-gradient(rgba(255, 255, 255, .7), rgba(255, 255, 255, .7)), url(${maskImage}) no-repeat center center `,
    backgroundSize: "cover",
    color: "#5b5b5b",
    fontSize: "17px"
  },
  text: {
    marginBottom: "15px",
    fontWeight: 600
  },
  textHead: {
    color: "white",
    textAlign: "center",
    width: "30vw",
    fontWeight:500,
    fontSize: "16px",
    lineHeight: "26px",
    minWidth: "140px"
  },
  submit: {
    textAlign: "center",
    bottom: theme.spacing(5),
  },
  button: {
    fontWeight: 400
  },
  title: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(1)
  },
  searchTool: {
    marginBottom: theme.spacing(1)
  },
  modal: {
    outline: "none"
  }
}));

function Home() {
  const styles = useStyles();
  const [showNeedSubmitModal, setShowNeedSubmitModal] = useState(false);
  const [showLeadSubmitModal, setShowLeadSubmitModal] = useState(false);
  const [error, setError] = useState("");
  const [mutateNeed] = useMutation(MUTATE_NEED);

  const onNeedSubmit = (need: Need) => {
    mutateNeed({
      variables: { request: need },
    })
      .then(() => setShowNeedSubmitModal(false))
      .catch(() => setError("Internal server error, please try again later"));
  };

  const onLeadSubmit = (lead: Lead) => {
    mutateNeed({
      variables: { request: lead },
    })
      .then(() => setShowLeadSubmitModal(false))
      .catch(() => setError("Internal server error, please try again later"));
  };

  return (
    <>
      <NavBar />
      <Box className={styles.head}>
        <Container className={styles.textHead} >
           Aggregating global demand & supply of medical supplies & equipment to connect needs with supply leads. STAT.
        </Container >
      </Box>
      <Box className={styles.container}>
        <Container className={styles.submitNeed}>
          <Container className={styles.text} >On the front-lines flighting COVID-19 and in need of medical supplies & equipment?</Container >
          <Container className={styles.submit}>
            <Button
              onClick={() => setShowNeedSubmitModal(true)}
              variant="contained"
              color="primary"
              className={styles.button}
            >
              POST NEEDS
          </Button>
          </Container>
          <CreateOrEditNeedModal
            title="Create Need"
            onSubmit={onNeedSubmit}
            submitError={error}
            onClose={() => setShowNeedSubmitModal(false)}
            isOpen={showNeedSubmitModal}
          />
        </Container>

        <Container className={styles.submitLead}>
          <Container className={styles.text} >Have access to medical supplies & equipment needed by healthcare professionals?</Container >
          <Container className={styles.submit}>
            <Button
              onClick={() => setShowLeadSubmitModal(true)}
              variant="contained"
              color="primary"
              className={styles.button}
            >
              POST SUPPLIES
          </Button>
          </Container>
          <CreateOrEditLeadModal
            title="Create Lead"
            onSubmit={onLeadSubmit}
            submitError={error}
            onClose={() => setShowLeadSubmitModal(false)}
            isOpen={showLeadSubmitModal}
          />
          </Container>
        </Box>
    </>   
  );
}

export default Home;
